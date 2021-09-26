import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
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
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [AngularFirestore, AngularFireAuth],
  bootstrap: [AppComponent],
})
export class AppModule {}
