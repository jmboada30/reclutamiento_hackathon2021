import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../../services/user.service';

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

  constructor(private fb: FormBuilder, private userSvc: UserService) {}

  ngOnInit(): void {}

  async onSubmit() {
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
