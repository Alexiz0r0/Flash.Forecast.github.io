import { Component, OnInit } from '@angular/core';

/*Add*/
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from "src/app/services/auth.service";

/*End-Add*/

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isSubmitted: boolean = false;
  isValidUser: boolean = false;

  form!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  initForm(): FormGroup{
    return this.fb.group({
    user:['', [Validators.required]],
    password:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    this.form = this.initForm();
  }

  onSubmit() {
    this.authService
    .login(this.form.value.user, this.form.value.password)
    .subscribe((data) => {
    if (data) {
    this.router.navigate(['/basededatos']);
    }
    this.isSubmitted = true;
    this.isValidUser = data;
    });
  }

}
