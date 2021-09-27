import { Component, OnInit } from '@angular/core';
import { UserService } from '../../firebase-services/user.service';
import { User } from '../../firebase-services/interfaces/user.interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss'],
})
export class LayoutsComponent implements OnInit {
  user$: Observable<User>;

  constructor(private userSvc: UserService) {}

  ngOnInit(): void {
    this.user$ = this.userSvc.getUserObs();
  }
}
