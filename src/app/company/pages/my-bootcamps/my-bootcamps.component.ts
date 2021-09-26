import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bootcamps',
  templateUrl: './my-bootcamps.component.html',
  styleUrls: ['./my-bootcamps.component.scss']
})
export class MyBootcampsComponent implements OnInit {

  bootcamps:any[] = [
    {
      tittle: 'reclutamiento 1',
      description: 'descripcion 1',
      integrantes: 2
    },
    {
      tittle: 'reclutamiento 2',
      description: 'descripcion 2',
      integrantes: 10
    },
    {
      tittle: 'reclutamiento 3',
      description: 'descripcion 3',
      integrantes: 3
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  edit = () => {
    console.log('edit');
  }

  delete = () => {
    console.log('delete');
  }

}
