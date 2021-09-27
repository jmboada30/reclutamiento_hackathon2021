import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BootcampService } from 'src/app/firebase-services/bootcamp.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.scss']
})
export class EditCompanyComponent implements OnInit {

  listCompanies = this.companyService.companies;
  formEditBootcamp:FormGroup;
  idDoc:string = "";

  constructor(
    private companyService:CompanyService,
    private formBuilder:FormBuilder, 
    private bootcampService:BootcampService,
    private sharedService:SharedService,
    private router:ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('init')
    this.createFormEditBootcamp()
  }

  createFormEditBootcamp(){
    this.formEditBootcamp = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      idCompany: new FormControl('', Validators.required),
      totalMembers: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    })
  }

  editBootcamp = (formValue) => {
    console.log(formValue)
    if(this.formEditBootcamp.invalid)return;
    try{
      this.bootcampService.onEditBootcamp(this.idDoc,formValue);
    }catch(err){
      this.sharedService.errorAlert('Error...', err);
    }
  }

}
