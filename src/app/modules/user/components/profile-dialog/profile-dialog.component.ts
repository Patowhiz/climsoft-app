import { UserProfile } from './../../../../data/interface/user';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';

const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.scss']
})
export class ProfileDialogComponent implements OnInit {
  @Input() profile!: UserProfile;

  public onClose: Subject<boolean> = new Subject();
  public form!: UntypedFormGroup;
  submitted = false;

  constructor(private router: Router, private dialogRef: BsModalRef) { }

  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      firstName: new UntypedFormControl('', Validators.required),
      lastName: new UntypedFormControl('', Validators.required),
      email: new UntypedFormControl('', [Validators.required, Validators.pattern(emailPattern)]),
      userId:  new UntypedFormControl('', Validators.required)
    });

    this.form.patchValue(this.profile);
  }

  get f(): any {
    return this.form.controls;
  }

  onCancel() {
    this.onClose.next(false);
    this.dialogRef.hide();
  }

  onSubmit(e: any): any {
    this.submitted = true;
    if(this.form.invalid) {
      return false;
    }
    this.onClose.next(this.form.value);
    this.dialogRef.hide();
  }
}
