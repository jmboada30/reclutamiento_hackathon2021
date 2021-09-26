import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterDevComponent } from './pages/register-dev/register-dev.component';
import { RegisterCompanyComponent } from './pages/register-company/register-company.component';

const routes: Routes = [
  {
    path: 'dev',
    component: RegisterDevComponent,
  },
  {
    path: 'company',
    component: RegisterCompanyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
