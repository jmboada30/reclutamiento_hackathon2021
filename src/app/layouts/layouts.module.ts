import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutsComponent } from './layout/layouts.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LayoutsComponent, NavbarComponent, HomeComponent],
  imports: [CommonModule, LayoutsRoutingModule, SharedModule],
})
export class LayoutsModule {}
