import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'login-form';
  loginForm! : FormGroup;
  hide = true;

  constructor(){}

  ngOnInit() : void{
    this.loginForm = new FormGroup({
      emailFormControl: new FormControl('', [Validators.required,Validators.email]),
      passwordFormControl: new FormControl('',[Validators.required])
    })
  }

}
