import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCompanyComponent } from './pages/edit-company/edit-company.component';
import { MyBootcampsComponent } from './pages/my-bootcamps/my-bootcamps.component';
import { NewBootcampComponent } from './pages/new-bootcamp/new-bootcamp.component';
import { ShowBootcampComponent } from './pages/show-bootcamp/show-bootcamp.component';

const COMPANY_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'show_bootcamps',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: 'show_bootcamps',
        component: ShowBootcampComponent,
      },
      {
        path: 'my_bootcamps',
        component: MyBootcampsComponent,
      },
      {
        path: 'new_bootcamp',
        component: NewBootcampComponent,
      },
      {
        path: 'show_bootcamp/:id',
        component: EditCompanyComponent,
      },
      {
        path: '**',
        redirectTo: 'show_bootcamps',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(COMPANY_ROUTES)],
  exports: [RouterModule],
})
export class CompanyRoutingModule {}
