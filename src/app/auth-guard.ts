import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    // const isLoggedIn = !!localStorage.getItem('token'); // simple auth check
    // if (!isLoggedIn) {
    //   this.router.navigate(['/login']); // redirect to login
    //   return false;
    // }
    return true;
  }
}
