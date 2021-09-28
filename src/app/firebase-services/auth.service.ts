import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { SharedService } from '../shared/services/shared.service';

interface AuthServiceCheckAuth {
  func: (user: any) => void;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: AngularFireAuth, private sharedSvc: SharedService) {
    this.auth = this.auth;
  }

  async doCreateUserWithEmailPassword(email: string, password: string) {
    const res = await this.auth.createUserWithEmailAndPassword(email, password);
    await res.user.sendEmailVerification();
    return res.user;
  }

  async doSignInWithEmailAndPassword(email: string, password: string) {
    this.sharedSvc.showSpinner();
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .finally(() => this.sharedSvc.hideSpinner());
  }

  async doSignOut() {
    return this.auth.signOut();
  }

  async doCheckAuth({ func }: AuthServiceCheckAuth) {
    return this.auth.onAuthStateChanged(func);
  }
}
