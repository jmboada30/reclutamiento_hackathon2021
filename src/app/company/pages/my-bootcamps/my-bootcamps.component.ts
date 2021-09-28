import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BootcampService } from 'src/app/firebase-services/bootcamp.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { UserService } from '../../../firebase-services/user.service';
import { Observable } from 'rxjs';
import { Bootcamp } from '../../../firebase-services/interfaces/bootcamp.interface';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-my-bootcamps',
  templateUrl: './my-bootcamps.component.html',
  styleUrls: ['./my-bootcamps.component.scss'],
})
export class MyBootcampsComponent implements OnInit {
  bootcamps$: Observable<Bootcamp[]> = null;

  constructor(
    private userSvc: UserService,
    private bootcampSvc: BootcampService,
    private sharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listMyBootcamps();
  }

  listMyBootcamps() {
    this.bootcamps$ = this.userSvc
      .getUserObs()
      .pipe(
        switchMap((user) =>
          this.bootcampSvc.getBootcampsByIdCompany(user.idUser)
        )
      );
  }

  edit = (idx: string) => {
    this.router.navigate(['company/my_bootcamps', idx]);
  };

  delete = (idx: string) => {
    try {
      this.bootcampSvc.onDeleteBootcamp(idx);
      this.sharedService.successAlert('Eliminado correctamente');
    } catch (err) {
      this.sharedService.errorAlert('Error...', err);
    }
  };
}
