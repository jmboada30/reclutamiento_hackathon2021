import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layout/layouts.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
  },
  {
    path: 'bootscamps',
    //! Add module myBootcamp here!
  },
  {
    path: 'bootscamps',
    //! Add module myInscriptions here!
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutsRoutingModule {}
