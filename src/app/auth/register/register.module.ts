import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterDevComponent } from './pages/register-dev/register-dev.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterCompanyComponent } from './pages/register-company/register-company.component';

@NgModule({
  declarations: [RegisterDevComponent, RegisterCompanyComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class RegisterModule {}
