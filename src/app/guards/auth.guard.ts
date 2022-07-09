import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';

import { AuthService } from '../api/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  auth() {
    const isLoggedIn = this.authService.isLogged();
    if (!isLoggedIn) {
      this.router.navigate(['/login']);
    }

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

    this.auth();

    return true;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]) {

    this.auth();

    return true;
  }

}
