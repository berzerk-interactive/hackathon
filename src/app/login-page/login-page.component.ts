import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {CanActivate, Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm = new FormGroup({
   userName: new FormControl('',  Validators.required),
   password: new FormControl('',  Validators.required),
   type: new FormControl(''),
   // selectFormControl : new FormControl('', Validators.required)

 });
  // username: any;
  // password:any;
  constructor( private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
    // const redirectUrl = route['_routerState']['url'];
    this.router.navigateByUrl(
     this.router.createUrlTree(
       ['/patient/1'], {
         queryParams: {

         }
       }
     )
   );
  }
}
