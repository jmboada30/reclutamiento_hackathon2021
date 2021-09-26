import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../../../firebase-services/user.service';
import { SharedService } from '../../../../shared/services/shared.service';
import {
  CountriesService,
  CountriesDropdown,
} from '../../services/countries.service';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.scss'],
})
export class RegisterCompanyComponent implements OnInit {
  wasValidated = false;

  form: FormGroup = this.fb.group({
    email: [, Validators.required],
    linkedIn: [, Validators.required],
    nameCompany: [, Validators.required],
    password: [, Validators.required],
    password2: [, Validators.required],
    webPage: [],
    country: [],
    aboutUs: [],
    role: ['Company'],
  });

  countries: CountriesDropdown[] = [];

  constructor(
    private fb: FormBuilder,
    private userSvc: UserService,
    private countrySvc: CountriesService,
    private sharedSvc: SharedService
  ) {}

  ngOnInit(): void {
    this.fillCountries();
  }

  fillCountries() {
    this.countrySvc
      .getCountries()
      .subscribe((countries) => (this.countries = countries));
  }

  async onSubmit() {
    if (this.form.invalid) return;

    try {
      await this.userSvc.doCreateUser(this.form.value);
      this.sharedSvc.successAlert('Empresa Creada!');
    } catch (error) {
      console.log('error :>> ', error);
      this.sharedSvc.errorAlert('Ocurrio un error!');
    } finally {
      this.wasValidated = true;
    }
  }
}
