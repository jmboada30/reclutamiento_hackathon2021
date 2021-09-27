import { Injectable } from '@angular/core';
import { Router, CanActivate, CanLoad } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable, pipe } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { UserService } from '../firebase-services/user.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedGuard implements CanActivate {
  constructor(
    private router: Router,
    private authSvc: AngularFireAuth,
    private userSvc: UserService
  ) {}

  canActivate(): Observable<boolean> | boolean {
    return this.checkUser();
  }

  checkUser() {
    return this.authSvc.user.pipe(
      map((user) => {
        console.log('user :>> ', user);
        if (!user || !user?.emailVerified) {
          this.router.navigateByUrl('auth/signin');
          return false;
        }
        this.userSvc.getUserById(user.uid).subscribe();
        return true;
      })
    );
  }
}
