import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutsComponent } from './layout/layouts.component';

@NgModule({
  declarations: [LayoutsComponent],
  imports: [CommonModule, LayoutsRoutingModule],
})
export class LayoutsModule {}
