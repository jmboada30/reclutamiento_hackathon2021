import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BootcampService } from 'src/app/firebase-services/bootcamp.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-new-bootcamp',
  templateUrl: './new-bootcamp.component.html',
  styleUrls: ['./new-bootcamp.component.scss']
})
export class NewBootcampComponent implements OnInit {

  listCompanies = this.companyService.companies;
  formNewBootcamp:FormGroup;

  constructor(
    private companyService:CompanyService,
    private formBuilder:FormBuilder, 
    private bootcampService:BootcampService,
    private sharedService:SharedService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.createFormNewBootcamp();
  }

  createFormNewBootcamp(){
    this.formNewBootcamp = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      idCompany: new FormControl('', Validators.required),
      totalMembers: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    })
  }

  createBootcamp = async (formValues) => {
    if(!this.formNewBootcamp.valid) return;
    try{
      await this.bootcampService.onCreateBootcamp(formValues);
      this.sharedService.successAlert('Bootcamp creado correctamente',)
      this.formNewBootcamp.reset();
      this.router.navigate(['/company/show_bootcamps']);
    }catch(err){
      this.sharedService.errorAlert('Error...','Intente nuevamente')
    }
  }

}
