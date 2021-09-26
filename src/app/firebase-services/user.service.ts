import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { User } from './interfaces/user.interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersCollection: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore, private authSvc: AuthService) {
    this.usersCollection = this.afs.collection<any>('users');
  }

  async doCreateUser(user: User) {
    const { email, password, password2, role, ...rest } = user;
    const resp = await this.authSvc.doCreateUserWithEmailPassword(email, password);

   
    return this.usersCollection.doc(resp.uid).set({
      ...rest,
      idUser: resp.uid,
      email
      
    });
  }

  async observeUser(uid: string) {
    return this.usersCollection.doc(uid).snapshotChanges();
  }

  // inscription boopcamp nuevo metodo
  // unsubscrite bopcamp
}
