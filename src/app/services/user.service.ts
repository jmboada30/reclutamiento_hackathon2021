import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

interface User {
  name: string;
  lastName: string;
  country: string;
  dateBirth: string;
  linkedIn: string;
  repository: string;
  userDescription: string;
  role: string;
  idDoc?: string;
  aboutUs?: string;
  nameCompany: string;
  webPage?: string;
}
@Injectable()
export class UserService {
  private usersCollection: AngularFirestoreCollection<any>;
  private afs: AngularFirestore;
  
  constructor() {
    this.usersCollection = this.afs.collection<any>('users');
  }

  async doCreateUser(user: User) {
    const idDoc = this.afs.createId();
    return this.usersCollection.doc(idDoc).set({
      ...user,
    });
  }

  async observeUser(uid: string) {
    return this.usersCollection.doc(uid).snapshotChanges();
  }
}
