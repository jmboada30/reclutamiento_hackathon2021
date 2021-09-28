import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeveloperRoutingModule } from './developer-routing.module';
import { SharedModule } from '../shared/shared.module';

import { BootcampsComponent } from './pages/bootcamps/bootcamps.component';
import { InscripcionesComponent } from './pages/inscripciones/inscripciones.component';

@NgModule({
  declarations: [BootcampsComponent, InscripcionesComponent],
  imports: [CommonModule, DeveloperRoutingModule, SharedModule],
})
export class DeveloperModule {}
