import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  FormGroup,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() {}

  samePassword(field1: string, field2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const pass1 = formGroup.get(field1).value;
      const pass2 = formGroup.get(field2).value;

      if (pass1 === pass2) {
        formGroup.get(field2).setErrors(null);
        return null;
      }

      formGroup.get(field2).setErrors({ noSamePasswords: true });
      return { noSamePasswords: true };
    };
  }

  campoInvalido(
    form: FormGroup,
    campo: string
  ): { error: boolean; msg: string } {
    const errors = form.get(campo).errors;
    const error = form.get(campo)?.invalid && form.get(campo)?.touched;
    let msg = '';
    if (errors?.required) {
      msg = 'Campo requerido';
    } else if (errors?.pattern) {
      msg = 'El campo tiene un formato incorrecto';
    } else if (errors?.minlength) {
      msg = `Minimo ${errors?.minlength?.requiredLength}, de ${errors?.minlength?.actualLength}`;
    } else if (errors?.noSamePasswords) {
      msg = 'Las contraseñas no coinciden';
    }
    return { error, msg };
  }
}
