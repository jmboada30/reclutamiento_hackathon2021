import { Component, OnInit } from '@angular/core';
import { BootcampService } from 'src/app/firebase-services/bootcamp.service';
import { Bootcamp } from 'src/app/shared/bootcamp.interface';

@Component({
  selector: 'app-bootcamps',
  templateUrl: './bootcamps.component.html',
  styleUrls: ['./bootcamps.component.scss'],
})
export class BootcampsComponent implements OnInit {
  bootcamps$ = this.bootcampSVC.bootcamps;
  constructor(private bootcampSVC: BootcampService) {}

  ngOnInit(): void {
    // console.log(this.bootcamps$.subscribe( d =>{
    //   console.log(d);
    // }));
    // this.bootcamps = this.bootcampSVC.onGetBootcamps
    // console.log( "holalaalalal" + this.bootcamps);
    // console.log("hola");
  }
  register() {}
}
