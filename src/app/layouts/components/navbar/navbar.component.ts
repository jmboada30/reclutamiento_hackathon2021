import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../../firebase-services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() role: string = null;

  constructor(private authSvc: AuthService) {}

  ngOnInit(): void {}

  async onExitClick() {
    await this.authSvc.doSignOut();
  }
}
