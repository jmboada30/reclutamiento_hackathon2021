import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutsComponent } from './layout/layouts.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [LayoutsComponent, NavbarComponent],
  imports: [CommonModule, LayoutsRoutingModule],
})
export class LayoutsModule {}
