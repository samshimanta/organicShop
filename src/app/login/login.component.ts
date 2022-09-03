import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 

import firebase from 'firebase/compat';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  


  constructor(private afAuth:AngularFireAuth) {
   
   }
   //login method
   login(){
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
   }
   

}
