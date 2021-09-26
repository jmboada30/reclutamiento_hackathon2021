import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../../../firebase-services/user.service';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.scss'],
})
export class RegisterCompanyComponent implements OnInit {
  wasValidated = false;

  form: FormGroup = this.fb.group({
    email: ['', Validators.required],
    linkedIn: ['', Validators.required],
    nameCompany: ['', Validators.required],
    password: ['', Validators.required],
    password2: ['', Validators.required],
    webPage: [''],
    country: [''],
    aboutUs: [''],
    role: ['Company'],
  });

  constructor(private fb: FormBuilder, private userSvc: UserService) {}

  ngOnInit(): void {}

  async onSubmit() {
    console.log('this.form.value :>> ', this.form);
    if (this.form.invalid) return;

    try {
      await this.userSvc.doCreateUser(this.form.value);
    } catch (error) {
      console.log('error :>> ', error);
    } finally {
      this.wasValidated = true;
    }
  }
}
