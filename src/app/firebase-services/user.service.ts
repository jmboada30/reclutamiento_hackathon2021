import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { User } from './interfaces/user.interfaces';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersCollection: AngularFirestoreCollection<any>;

  constructor(
    private afs: AngularFirestore,
    private authSvc: AuthService,
    private spinner: NgxSpinnerService
  ) {
    this.usersCollection = this.afs.collection<any>('users');
  }

  async doCreateUser(user: User) {
    this.spinner.show();
    const { email, password, password2, role, ...rest } = user;

    try {
      const resp = await this.authSvc.doCreateUserWithEmailPassword(
        email,
        password
      );

      return await this.usersCollection.doc(resp.uid).set({
        ...rest,
        idUser: resp.uid,
        email,
      });
    } catch (error) {
    } finally {
      this.spinner.hide();
    }
  }

  async observeUser(uid: string) {
    return this.usersCollection.doc(uid).snapshotChanges();
  }

  // inscription boopcamp nuevo metodo
  // unsubscrite bopcamp
}
