import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CompanyModule } from './company/company.module';
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
    CompanyModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [AngularFirestore, AngularFireAuth],
  bootstrap: [AppComponent],
})
export class AppModule {}
