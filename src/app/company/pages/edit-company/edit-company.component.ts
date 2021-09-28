import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { BootcampService } from 'src/app/firebase-services/bootcamp.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { ValidatorService } from '../../../shared/validators/validator.service';
import { Bootcamp } from '../../../firebase-services/interfaces/bootcamp.interface';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.scss'],
})
export class EditCompanyComponent implements OnInit {
  company: Bootcamp['company'] = null;
  formEditBootcamp: FormGroup = this.fb.group({
    idDoc: [],
    title: [, Validators.required],
    totalMembers: [, Validators.required],
    duration: [, Validators.required],
    description: [, Validators.required],
  });
  bootcamp: Bootcamp = null;

  constructor(
    private fb: FormBuilder,
    private bootcampSvc: BootcampService,
    private sharedService: SharedService,
    private validator: ValidatorService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fillBootcamp();
  }

  fillBootcamp() {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.bootcampSvc.getBootcampById(id)))
      .subscribe((bootcamp) => {
        this.bootcamp = bootcamp;
        this.formEditBootcamp.reset(bootcamp);
      });
  }

  async editBootcamp() {
    this.formEditBootcamp.markAllAsTouched();
    if (this.formEditBootcamp.invalid) return;
    const { idDoc, ...formValue } = this.formEditBootcamp.value;

    try {
      await this.bootcampSvc.onEditBootcamp(idDoc, formValue);
      this.sharedService.successAlert('Bootcamp editado correctamente');
      this.formEditBootcamp.reset();
      this.router.navigate(['/company/show_bootcamps']);
    } catch (err) {
      this.sharedService.errorAlert('Error...', err);
    }
  }

  campoInvalido(campo: string) {
    return this.validator.campoInvalido(this.formEditBootcamp, campo);
  }
}
