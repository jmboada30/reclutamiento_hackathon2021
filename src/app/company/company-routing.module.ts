import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MyBootcampsComponent } from "./components/my-bootcamps/my-bootcamps.component";
import { ShowBootcampComponent } from "./components/show-bootcamp/show-bootcamp.component";

const COMPANY_ROUTES: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component: ShowBootcampComponent
      },
      {
        path:'my_bootcamps',
        component: MyBootcampsComponent
      },
      {
        path:'**',
        redirectTo: ''
      },
    ]
  }
]

@NgModule({
  imports:[
    RouterModule.forChild(COMPANY_ROUTES)
  ],
  exports:[
    RouterModule
  ]
})
export class CompanyRoutingModule {}