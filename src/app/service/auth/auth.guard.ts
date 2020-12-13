import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from 'src/app/components/login/login.component';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private router: Router,
    private service: LoginService,
  ) { }

  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isLogged = this.service.isLogged();
      console.log("var connection " + isLogged);

      if (!isLogged) {
        // Si pas d'utilisateur connecté : redirection vers la page de login
        console.log('Vous n\'êtes pas connectés');
        this.router.navigate(['/login'], { queryParams: { redirectUrl: state.url }});
      }
      return isLogged;
  }
  
}
