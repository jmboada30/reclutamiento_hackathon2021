import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckMailComponent } from './check-mail/check-mail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
  },
  {
    path: 'signin',
    loadChildren: () =>
      import('./signin/signin.module').then((m) => m.SigninModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'checkmail',
    component: CheckMailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
