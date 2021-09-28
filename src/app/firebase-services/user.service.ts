import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { User } from './interfaces/user.interfaces';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { SharedService } from '../shared/services/shared.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersCollection: AngularFirestoreCollection<any>;
  private _user = new BehaviorSubject<User>(null);

  constructor(
    private afs: AngularFirestore,
    private authSvc: AuthService,
    private sharedSvc: SharedService
  ) {
    this.usersCollection = this.afs.collection<any>('users');
  }

  async doCreateUser(user: User) {
    this.sharedSvc.showSpinner();
    const {
      aboutUs,
      nameCompany,
      name,
      lastName,
      dateBirth,
      userDescription,
      webPage,
      repository,
      ...rest
    } = user;

    const dataUser = { myBootcamps: [], nameCompany, aboutUs, webPage };
    const dataCompany = {
      bootcampsInscription: [],
      name,
      lastName,
      dateBirth,
      userDescription,
      repository,
    };
    try {
      const { uid } = await this.authSvc.doCreateUserWithEmailPassword(
        user.email,
        user.password
      );

      delete rest.password;
      delete rest.password2;

      await this.usersCollection.doc(uid).set({
        idUser: uid,
        ...rest,
        ...(user.role === 'company' ? dataUser : dataCompany),
      });
    } catch (error) {
    } finally {
      this.sharedSvc.hideSpinner();
    }
  }

  async observeUser(uid: string) {
    return this.usersCollection.doc(uid).snapshotChanges();
  }

  /**
   * @description metodo  ue permite realizar la subscriotion y onSubscrition
   * @param method
   * @param idUser
   * @param idBootcamp
   * @param bootcamps
   * @returns void
   */
  async subscribeAndOnsubscirbe(
    method: 'subscribe' | 'unSubscribe',
    idUser: string,
    idBootcamp: string,
    bootcamps: string[]
  ) {
    let newBootcamps = bootcamps;
    if (method === 'subscribe') newBootcamps = [...newBootcamps, idBootcamp];
    if (method === 'unSubscribe')
      newBootcamps = newBootcamps.filter((b) => b !== idBootcamp);

    return this.usersCollection.doc(idUser).update({
      bootcampsInscription: newBootcamps,
    });
  }

  getUserById(idUser: string) {
    return this.afs
      .collection<User>('users', (ref) => ref.where('idUser', '==', idUser))
      .snapshotChanges()
      .pipe(tap((resp) => this._user.next(resp[0].payload.doc.data())));
  }

  getUserObs() {
    return this._user.asObservable();
  }
}
