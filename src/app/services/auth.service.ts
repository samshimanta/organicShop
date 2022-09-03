import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static GoogleAuth() {
    throw new Error('Method not implemented.');
  }
  constructor(
    public afAuth: AngularFireAuth // Inject Firebase auth service
  ) {}
    
}
