import { Component, OnInit } from '@angular/core';
import { BootcampService } from 'src/app/services/bootcamp.service';

@Component({
  selector: 'app-show-bootcamp',
  templateUrl: './show-bootcamp.component.html',
  styleUrls: ['./show-bootcamp.component.scss']
})
export class ShowBootcampComponent implements OnInit {

  // listReclutamiento:any[] = [
    // {
    //   tittle: 'reclutamiento 1',
    //   description: 'descripcion 1',
    //   integrantes: 2
    // },
    // {
    //   tittle: 'reclutamiento 2',
    //   description: 'descripcion 2',
    //   integrantes: 10
    // },
    // {
    //   tittle: 'reclutamiento 3',
    //   description: 'descripcion 3',
    //   integrantes: 3
    // },
  // ]

  constructor(private bootcamps:BootcampService) {
    // this.getBootcamps();
  }

  ngOnInit(): void {
  }

  get listReclutamiento(){
    return this.bootcamps.onGetBootcamps();
  }

}
