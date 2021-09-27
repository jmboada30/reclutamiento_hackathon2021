import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowBootcampComponent } from './pages/show-bootcamp/show-bootcamp.component';
import { SharedModule } from '../shared/shared.module';
import { MyBootcampsComponent } from './pages/my-bootcamps/my-bootcamps.component';
import { CompanyRoutingModule } from './company-routing.module';
import { NewBootcampComponent } from './pages/new-bootcamp/new-bootcamp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditCompanyComponent } from './pages/edit-company/edit-company.component';

@NgModule({
  declarations: [ShowBootcampComponent, MyBootcampsComponent, NewBootcampComponent, EditCompanyComponent],
  imports: [CommonModule, SharedModule, CompanyRoutingModule, ReactiveFormsModule],
})
export class CompanyModule {}
