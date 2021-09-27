import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { BootcampService } from 'src/app/firebase-services/bootcamp.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { CompanyService } from '../../services/company.service';
import { ValidatorService } from '../../../shared/validators/validator.service';

@Component({
  selector: 'app-new-bootcamp',
  templateUrl: './new-bootcamp.component.html',
  styleUrls: ['./new-bootcamp.component.scss'],
})
export class NewBootcampComponent implements OnInit {
  listCompanies = this.companyService.companies;
  formNewBootcamp: FormGroup;

  constructor(
    private companyService: CompanyService,
    private formBuilder: FormBuilder,
    private bootcampService: BootcampService,
    private sharedService: SharedService,
    private router: Router,
    private validator: ValidatorService
  ) {}

  ngOnInit(): void {
    this.createFormNewBootcamp();
  }

  createFormNewBootcamp() {
    this.formNewBootcamp = this.formBuilder.group({
      title: ['', Validators.required],
      idCompany: ['', Validators.required],
      totalMembers: ['', Validators.required],
      duration: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  async createBootcamp(formValues) {
    this.formNewBootcamp.markAllAsTouched();
    if (!this.formNewBootcamp.valid) return;
    try {
      await this.bootcampService.onCreateBootcamp(formValues);
      this.sharedService.successAlert('Bootcamp creado correctamente');
      this.formNewBootcamp.reset();
      this.router.navigate(['/company/show_bootcamps']);
    } catch (err) {
      this.sharedService.errorAlert('Error...', 'Intente nuevamente');
    }
  }

  campoInvalido(campo: string) {
    return this.validator.campoInvalido(this.formNewBootcamp, campo);
  }
}
