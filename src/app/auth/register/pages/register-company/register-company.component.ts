import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../../../firebase-services/user.service';
import { SharedService } from '../../../../shared/services/shared.service';
import { ValidatorService } from '../../../../shared/validators/validator.service';
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
  form: FormGroup = this.fb.group(
    {
      email: [
        ,
        [Validators.required, Validators.pattern(this.validator.emailPattern)],
      ],
      linkedIn: [, Validators.required],
      nameCompany: [, Validators.required],
      password: [, Validators.required],
      password2: [, Validators.required],
      webPage: [],
      country: [],
      aboutUs: [],
      role: ['company'],
    },
    {
      validators: [this.validator.samePassword('password', 'password2')],
    }
  );

  countries: CountriesDropdown[] = [];

  constructor(
    private fb: FormBuilder,
    private userSvc: UserService,

    private countrySvc: CountriesService,
    private sharedSvc: SharedService,
    private validator: ValidatorService
  ) { }

  ngOnInit(): void {
    this.fillCountries();
  }

  fillCountries() {
    this.countrySvc
      .getCountries()
      .subscribe((countries) => (this.countries = countries));
  }

  async onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    try {
      await this.userSvc.doCreateUser(this.form.value);
      this.sharedSvc.successAlert('Empresa Creada!');
    } catch (error) {
      console.log('error :>> ', error);
      this.sharedSvc.errorAlert('Ocurrio un error!', error.message);
    }
  }

  campoInvalido(campo: string) {
    return this.form.get(campo)?.invalid && this.form.get(campo)?.touched;
  }
}
