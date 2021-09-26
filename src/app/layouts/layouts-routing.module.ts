import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layout/layouts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'company',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: 'company',
        loadChildren: () =>
          import('../company/company.module').then((m) => m.CompanyModule),
      },
      {
        path: 'developer',
        loadChildren: () =>
          import('../developer/developer.module').then(
            (m) => m.DeveloperModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutsRoutingModule {}
