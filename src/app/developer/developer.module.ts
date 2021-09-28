import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootcampsComponent } from './pages/bootcamps/bootcamps.component';

import { DeveloperRoutingModule } from './developer-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BootcampsComponent],
  imports: [CommonModule, DeveloperRoutingModule, SharedModule],
})
export class DeveloperModule {}
