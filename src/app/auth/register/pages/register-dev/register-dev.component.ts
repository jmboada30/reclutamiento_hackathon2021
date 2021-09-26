import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../../firebase-services/user.service';
import { SharedService } from '../../../../shared/services/shared.service';
import { AuthService } from '../../../../firebase-services/auth.service';
import { ValidatorService } from '../../../../shared/validators/validator.service';
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
      password: [, Validators.required],
      password2: [, Validators.required],
      country: [],
      dateBirth: [],
      repository: [],
      userDescription: [],
      role: ['development'],
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
    private authSvc: AuthService,
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
      this.sharedSvc.successAlert('Has sido registrado exitosamente!');
    } catch (error) {
      console.log('error :>> ', error);
      this.sharedSvc.errorAlert('Ocurrio un error!', error.message);
    }
  }

  campoInvalido(campo: string) {
    return this.form.get(campo)?.invalid && this.form.get(campo)?.touched;
  }
}
