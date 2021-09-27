import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootcampsComponent } from './pages/bootcamps/bootcamps.component'

import { DeveloperRoutingModule } from './developer-routing.module';


@NgModule({
  declarations: [BootcampsComponent],
  imports: [
    CommonModule,
    DeveloperRoutingModule,
  ]
})
export class DeveloperModule { }
