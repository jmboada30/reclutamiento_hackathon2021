import { Injectable } from '@angular/core';
import { NgxSpinnerService, Spinner } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private spinner: NgxSpinnerService) {}

  private toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  successAlert(title: string) {
    this.toast.fire({ icon: 'success', title });
  }

  errorAlert(title: string, text: string) {
    this.toast.fire({ icon: 'error', title, text });
  }

  showSpinner(name?: string, spinner?: Spinner) {
    this.spinner.show(name, spinner);
  }

  hideSpinner(name?: string, debounce?: number) {
    this.spinner.hide(name, debounce);
  }
}
