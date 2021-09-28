import { Component, OnInit } from '@angular/core';
import { BootcampService } from 'src/app/firebase-services/bootcamp.service';

@Component({
  selector: 'app-show-bootcamp',
  templateUrl: './show-bootcamp.component.html',
  styleUrls: ['./show-bootcamp.component.scss'],
})
export class ShowBootcampComponent implements OnInit {
  listReclutamiento = this.bootcampsService.bootcamps;

  constructor(private bootcampsService: BootcampService) {}

  ngOnInit(): void {}
}
