import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }
  loginUser(credential){
    return new Promise((accept, reject)=>{
      if(credential.email==='test@test.com' && credential.password==='12345') {
        accept('Login test Correcto');
      } else {
        reject('Login test Incorrecto');
      }
    });
  }
}
