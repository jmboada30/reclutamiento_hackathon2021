import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../../shared/validators/validator.service';
import { AuthService } from '../../../../firebase-services/auth.service';
import { SharedService } from '../../../../shared/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  form: FormGroup = this.fb.group({
    email: [
      ,
      [Validators.required, Validators.pattern(this.validator.emailPattern)],
    ],
    password: [, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private validator: ValidatorService,
    private authSvc: AuthService,
    private sharedSvc: SharedService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('this.form.value :>> ', this.form.value);
    if (this.form.invalid) return;
    const { email, password } = this.form.value;
    this.authSvc.doSignInWithEmailAndPassword(email, password).then(
      (resp) => {
        if (resp.user.emailVerified === false) {
          this.router.navigateByUrl('/auth/checkmail');
        } else {
          this.router.navigateByUrl('');
        }
      },
      (error) => this.sharedSvc.errorAlert('Ups... error!', error.message)
    );
  }

  campoInvalido(campo: string) {
    return this.form.get(campo)?.invalid && this.form.get(campo)?.touched;
  }
}
