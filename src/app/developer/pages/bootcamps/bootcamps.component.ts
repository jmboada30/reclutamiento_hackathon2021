import { Component, OnInit } from '@angular/core';
import { BootcampService } from 'src/app/firebase-services/bootcamp.service';
import { UserService } from '../../../firebase-services/user.service';
import { switchMap, tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {
  Bootcamp,
  Participant,
} from '../../../firebase-services/interfaces/bootcamp.interface';
import { User } from 'src/app/firebase-services/interfaces/user.interfaces';

@Component({
  selector: 'app-bootcamps',
  templateUrl: './bootcamps.component.html',
  styleUrls: ['./bootcamps.component.scss'],
})
export class BootcampsComponent implements OnInit {
  bootcamps$: Observable<Bootcamp[]>;
  user: User;

  constructor(
    private bootcampSVC: BootcampService,
    private userSvc: UserService
  ) {}

  ngOnInit(): void {
    this.listBootcamps();
    this.userSvc.getUserObs().subscribe((user) => (this.user = user));
  }

  listBootcamps() {
    this.bootcamps$ = this.bootcampSVC.bootcamps.pipe(
      map((boot) => this.toogleButtons(boot))
    );
  }

  register(bootcamp: Bootcamp) {
    this.bootcampSVC.addDevToBootcamp(bootcamp.idDoc, this.user);
  }

  unsuscribe(bootcamp: Bootcamp) {
    this.bootcampSVC.removeDevToBootcamp(bootcamp.idDoc, this.user);
  }

  toogleButtons(bootcamps: Bootcamp[]): Bootcamp[] {
    return bootcamps.map((boot) => {
      const rta = boot.participants?.findIndex(
        (b) => b.idUser === this.user.idUser
      );
      if (rta > -1) return { ...boot, suscribe: true };
      return { ...boot, suscribe: false };
    });
  }
}
