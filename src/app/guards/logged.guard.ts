import { Injectable, OnDestroy } from '@angular/core';
import { Router, CanActivate, CanLoad } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable, Subscription } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import * as firebase from '@angular/fire';

@Injectable({
  providedIn: 'root',
})
export class LoggedGuard implements CanActivate, CanLoad {
  constructor(private router: Router, private authSvc: AngularFireAuth) {}

  canActivate(): Observable<boolean> | boolean {
    return this.authSvc.user.pipe(
      map((user) => {
        console.log('canActivate :>> ', user);
        if (!user || !user?.emailVerified) {
          this.router.navigateByUrl('/auth/signin');
          return false;
        } else {
          return true;
        }
      })
    );
  }

  canLoad(): Observable<boolean> | boolean {
    return this.authSvc.user.pipe(
      map((user) => {
        console.log('canLoad :>> ', user);
        if (!user || !user?.emailVerified) {
          this.router.navigateByUrl('/auth/signin');
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
