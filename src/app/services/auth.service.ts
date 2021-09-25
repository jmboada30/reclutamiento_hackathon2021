import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { UserService } from './user.service';

interface AuthServiceCheckAuth {
  func: (user: any) => void;
}
@Injectable()
export class AuthService {
  private auth: AngularFireAuth;
  private userRef = new UserService();

  constructor() {
    this.auth = this.auth;
    this.userRef = this.userRef;
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
  async observeUser(uid: string) {
    return this.userRef.observeUser(uid);
  }
}
