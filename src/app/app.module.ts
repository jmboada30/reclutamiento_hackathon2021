import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootcampsComponent } from './users/pages/bootcamps/bootcamps.component';
import { InscripcionesComponent } from './users/pages/inscripciones/inscripciones.component';

@NgModule({
  declarations: [
    AppComponent,
    BootcampsComponent,
    InscripcionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
