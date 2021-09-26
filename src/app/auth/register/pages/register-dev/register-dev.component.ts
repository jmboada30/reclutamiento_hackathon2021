import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../../firebase-services/user.service';
import { SharedService } from '../../../../shared/services/shared.service';
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
  wasValidated = false;

  form: FormGroup = this.fb.group({
    email: ['', Validators.required],
    linkedIn: ['', Validators.required],
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    password: ['', Validators.required],
    password2: ['', Validators.required],
    country: [''],
    dateBirth: [''],
    repository: [''],
    userDescription: [''],
    role: ['Development'],
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
      this.sharedSvc.successAlert('Has sido registrado exitosamente!');
    } catch (error) {
      console.log('error :>> ', error);
      this.sharedSvc.errorAlert('Ocurrio un error!');
    } finally {
      this.wasValidated = true;
    }
  }
}
