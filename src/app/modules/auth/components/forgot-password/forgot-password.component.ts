import { AppMode } from './../../../../data/enum/app-mode';
import { environment } from 'src/environments/environment';
import { AuthService } from './../../services/auth.service';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  form: UntypedFormGroup = new UntypedFormGroup({
    email: new UntypedFormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])
  });
  submitted = false;
  loading = false;
  error: boolean = false;

  constructor( private authService: AuthService) {}


  ngOnInit(): void {}

  get f() {
    return this.form.controls;
  }

  get isClimsoft(): boolean {
    return true;
  }

  onSubmit() {
    this.submitted = true;
    if(this.form.invalid) {
      return;
    }
    this.loading = true;
    this.authService.login(this.form.value)
        .subscribe({
          next: (res: any) => {
            if([400, 401, 403].indexOf(res.status) !== -1) {
              this.error = true;
            } else {
              this.error = false;
              this.submitted = false;
            }
            this.loading = false;
          }
        });
  }
}
