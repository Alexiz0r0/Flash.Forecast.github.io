import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from "rxjs";

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  isAuthenticate: boolean = false;

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLogged(): Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router) { }
  
  login(user: string, password: string): Observable<boolean> {
    if (user === 'jaob' && password === '123') {
      this.isAuthenticate = true;
      console.log(this.isAuthenticate);
      this.loggedIn.next(true);
      return of(true);
    }
    return of(false);
  }

  logOut(): void {
    this.loggedIn.next(false);
    this.router.navigate(['/inicio']);
    this.isAuthenticate = false;
  }




}
