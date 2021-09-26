import { Component, OnInit } from '@angular/core';
import { BootcampService } from 'src/app/firebase-services/bootcamp.service';
import { Bootcamp } from 'src/app/shared/bootcamp.interface';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-bootcamps',
  templateUrl: './bootcamps.component.html',
  styleUrls: ['./bootcamps.component.scss']
})
export class BootcampsComponent implements OnInit {

  bootcamps: any;
  constructor(private bootcampSVC: BootcampService) { 
  }

  ngOnInit(): void {

    this.bootcamps = this.bootcampSVC.onDeleteBootcamp
    console.log(this.bootcamps);
  }

}
