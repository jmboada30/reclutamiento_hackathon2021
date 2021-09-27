import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootcampsComponent } from './pages/bootcamps/bootcamps.component';
import { InscripcionesComponent } from './pages/inscripciones/inscripciones.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'show_bootcamps',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: 'show_bootcamps',
        component: BootcampsComponent,
      },
      {
        path: 'my_inscriptions',
        component: InscripcionesComponent,
      },
      {
        path: '**',
        redirectTo: 'show_bootcamps',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeveloperRoutingModule {}
