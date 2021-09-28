import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../../firebase-services/user.service';
import { SharedService } from '../../../../shared/services/shared.service';
import { ValidatorService } from '../../../../shared/validators/validator.service';
import { Router } from '@angular/router';
import {
  CountriesDropdown,
  CountriesService,
} from '../../services/countries.service';

@Component({
  selector: 'app-register',
  templateUrl: './register-dev.component.html',
  styleUrls: ['./register-dev.component.scss'],
})
export class RegisterDevComponent implements OnInit {
  form: FormGroup = this.fb.group(
    {
      email: [
        ,
        [Validators.required, Validators.pattern(this.validator.emailPattern)],
      ],
      linkedIn: [, Validators.required],
      name: [, Validators.required],
      lastName: [, Validators.required],
      password: [, [Validators.required, Validators.minLength(6)]],
      password2: [, Validators.required],
      country: [],
      dateBirth: [],
      repository: [],
      userDescription: [],
      role: ['developer'],
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
    private validator: ValidatorService,
    private router: Router
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
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    try {
      await this.userSvc.doCreateUser(this.form.value);
      this.sharedSvc.successAlert('Has sido registrado exitosamente!');
      this.router.navigateByUrl('/auth/signin');
    } catch (error) {
      console.log('error :>> ', error);
      this.sharedSvc.errorAlert('Ocurrio un error!', error.message);
    }
  }

  campoInvalido(campo: string) {
    return this.validator.campoInvalido(this.form, campo);
  }
}
