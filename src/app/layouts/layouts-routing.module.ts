import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layout/layouts.component';
import { RoleGuard } from '../guards/role.guard';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'company',
        loadChildren: () =>
          import('../company/company.module').then((m) => m.CompanyModule),
        canLoad: [RoleGuard],
      },
      {
        path: 'developer',
        loadChildren: () =>
          import('../developer/developer.module').then(
            (m) => m.DeveloperModule
          ),
        canLoad: [RoleGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutsRoutingModule {}
