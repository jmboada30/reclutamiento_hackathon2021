import { Injectable } from '@angular/core';
import { Router, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../firebase-services/user.service';
import { map } from 'rxjs/operators';
import { CanLoad } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanLoad {
  constructor(private userSvc: UserService, private _router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | boolean {
    return this.userSvc.getUserObs().pipe(
      map((user) => {
        if (user && segments[0]?.path === user.role) return true;

        this._router.navigateByUrl('/home');
        return false;
      })
    );
  }
}
