import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { CheckMailComponent } from './check-mail/check-mail.component';

@NgModule({
  declarations: [AuthComponent, CheckMailComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
