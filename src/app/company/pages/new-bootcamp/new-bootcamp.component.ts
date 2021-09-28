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
import { ValidatorService } from '../../../shared/validators/validator.service';
import { UserService } from '../../../firebase-services/user.service';
import { Bootcamp } from '../../../firebase-services/interfaces/bootcamp.interface';

@Component({
  selector: 'app-new-bootcamp',
  templateUrl: './new-bootcamp.component.html',
  styleUrls: ['./new-bootcamp.component.scss'],
})
export class NewBootcampComponent implements OnInit {
  company: Bootcamp['company'] = null;

  formNewBootcamp: FormGroup = this.formBuilder.group({
    title: [, Validators.required],
    totalMembers: [, Validators.required],
    duration: [, Validators.required],
    description: [, Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private bootcampService: BootcampService,
    private sharedService: SharedService,
    private router: Router,
    private validator: ValidatorService,
    private userSvc: UserService
  ) {}

  ngOnInit(): void {
    this.fillCompany();
  }

  fillCompany() {
    this.userSvc.getUserObs().subscribe(({ nameCompany, idUser }) => {
      this.company = { nameCompany, idCompany: idUser };
    });
  }

  async createBootcamp(formValues) {
    this.formNewBootcamp.markAllAsTouched();
    if (!this.formNewBootcamp.valid) return;
    try {
      await this.bootcampService.onCreateBootcamp({
        ...formValues,
        company: this.company,
      });
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
