import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  registerForm: FormGroup;
  validationMessages = {
    DNI: [
      { type: 'required', message: 'El email es requerido' }
    ],
    email: [
      { type: 'required', message: 'El email es requerido' },
      { type: 'pattern', message: 'Email no valido'}
    ],
    password: [
      { type: 'required', message: 'El password es requerido' },
      { type: 'minlength', message: 'Password no valido'}
    ]
  }

  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private navCtrl: NavController,
    private storage: Storage
  ) {
    this.registerForm = this.formBuilder.group({
      DNI: new FormControl(
        '',
        Validators.compose([
          Validators.required
        ])
      ),
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])
      ),
      password: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
      )
    });
  }
  register(userData) {
    console.log(userData);
  }
}
