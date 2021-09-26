import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowBootcampComponent } from './components/show-bootcamp/show-bootcamp.component';
import { SharedModule } from '../shared/shared.module';
import { MyBootcampsComponent } from './components/my-bootcamps/my-bootcamps.component';
import { CompanyRoutingModule } from './company-routing.module';

@NgModule({
  declarations: [
    ShowBootcampComponent,
    MyBootcampsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
