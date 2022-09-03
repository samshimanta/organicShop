import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

import firebase from 'firebase/compat';



@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
   user !: firebase.User

  constructor(public authService: AuthService) { 
   authService.afAuth.authState.subscribe(user => this.user !=user)
  
    
  }

  ngOnInit(): void {
  }
  logout(){
    this.authService.afAuth.signOut()
    console.log('Hi')
  }

}
