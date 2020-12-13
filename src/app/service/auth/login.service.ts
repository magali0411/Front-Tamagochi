import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Logger } from '../../components/login/logger';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    ) {
  }

  logger: Logger = null;


  loginService(user) {
    console.log('tentive de connection');
    console.log('user : ' + user.username);
    this.http.post<Logger>('localhost:8080/login/' + user.username + '/' + user.password, user);

    // On récupère l'url de redirection
    const redirectUrl = this.route.snapshot.queryParams['redirectUrl'] || '/home';
    // On accède à la page souhaitée
    this.router.navigate([redirectUrl]);


    // TODO : Récupérer la réponse côté spring
    this.logger = new Logger();
    this.logger = user;

    return this.logger;

  }

  newUser(user) {
    console.log("creation d'un nouvel user");
    this.http.post<Logger>('http://localhost:8080/newUser/'+user.username+'/'+user.password+'/',user);

        // On récupère l'url de redirection
        const redirectUrl = this.route.snapshot.queryParams['redirectUrl'] || '/home';
        // On accède à la page souhaitée
        this.router.navigate([redirectUrl]);

    
    // TODO : Récupérer la réponse côté spring
    this.logger = new Logger();
    this.logger = user;

    return this.logger;
  }

  isLogged() : boolean {

    if (this.logger!= null)
      return false;
    return true;

  }
 
}

