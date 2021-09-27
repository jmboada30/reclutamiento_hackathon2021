import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BootcampService } from 'src/app/firebase-services/bootcamp.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-my-bootcamps',
  templateUrl: './my-bootcamps.component.html',
  styleUrls: ['./my-bootcamps.component.scss']
})
export class MyBootcampsComponent implements OnInit {

  bootcamps = this.bootcampsService.bootcamps;
  
  constructor(
    private bootcampsService:BootcampService,
    private sharedService:SharedService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  edit = (idx:string) => {
    this.router.navigate(['company/show_bootcamp', idx]);
  }

  delete = (idx:string) => {
    try{
      this.bootcampsService.onDeleteBootcamp(idx);
      this.sharedService.successAlert('Eliminado correctamente');
    }catch(err){
      this.sharedService.errorAlert('Error...', err)
    }
  }

}
