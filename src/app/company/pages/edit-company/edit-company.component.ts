import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BootcampService } from 'src/app/firebase-services/bootcamp.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { CompanyService } from '../../services/company.service';
import { ValidatorService } from '../../../shared/validators/validator.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.scss'],
})
export class EditCompanyComponent implements OnInit {
  listCompanies = this.companyService.companies;
  formEditBootcamp: FormGroup;
  idDoc: string = '';

  constructor(
    private companyService: CompanyService,
    private formBuilder: FormBuilder,
    private bootcampService: BootcampService,
    private sharedService: SharedService,
    private validator: ValidatorService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createFormEditBootcamp();
  }

  createFormEditBootcamp() {
    this.formEditBootcamp = this.formBuilder.group({
      title: ['', Validators.required],
      idCompany: ['', Validators.required],
      totalMembers: ['', Validators.required],
      duration: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  async editBootcamp() {
    this.formEditBootcamp.markAllAsTouched();
    if (this.formEditBootcamp.invalid) return;
    const formValue = this.formEditBootcamp.value;

    try {
      this.bootcampService.onEditBootcamp(this.idDoc, formValue);
    } catch (err) {
      this.sharedService.errorAlert('Error...', err);
    }
  }

  campoInvalido(campo: string) {
    return this.validator.campoInvalido(this.formEditBootcamp, campo);
  }
}
