import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { BootcampService } from '../../../firebase-services/bootcamp.service';
import { UserService } from '../../../firebase-services/user.service';
import { User } from '../../../firebase-services/interfaces/user.interfaces';
import { Bootcamp } from '../../../firebase-services/interfaces/bootcamp.interface';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss'],
})
export class InscripcionesComponent implements OnInit {
  bootcamps$: Observable<Bootcamp[]>;
  user: User;

  constructor(
    private bootcampSVC: BootcampService,
    private userSvc: UserService
  ) {}

  ngOnInit(): void {
    this.listMyBootcamps();
  }

  listMyBootcamps() {
    this.userSvc.getUserObs().subscribe((user) => (this.user = user));
    this.bootcamps$ = this.bootcampSVC
      .getBootcampsSubscribed(this.user)
      .pipe(tap(console.log));
  }
}
