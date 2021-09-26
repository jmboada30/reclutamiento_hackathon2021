import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { UserService } from './user.service';
import { AngularFirestore } from '@angular/fire/firestore';

interface AuthServiceCheckAuth {
  func: (user: any) => void;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {


  constructor(private auth: AngularFireAuth, private afs: AngularFirestore) {
    this.auth = this.auth;
  }

  async doCreateUserWithEmailPassword(email: string, password: string) {
    const res = await this.auth.createUserWithEmailAndPassword(email, password);
    return res.user;
  }

  async doSignInWithEmailAndPassword(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }
  async doSignOut() {
    return this.auth.signOut();
  }
  async doCheckAuth({ func }: AuthServiceCheckAuth) {
    return this.auth.onAuthStateChanged(func);
  }
}
