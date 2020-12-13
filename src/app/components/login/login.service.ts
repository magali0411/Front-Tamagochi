import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  user : Logger;


  constructor(private http: HttpClient) {
  }


  loginService(username: String, password: String) {
    this.user.username = username;
    this.user.password = password;
    const logger:Observable<Logger> = this.http.post<Logger>('localhost:8080/login/' + this.user.username + '/' + this.user.password, this.user);
    logger.subscribe(logger => {
      this.user = logger;
    })
    return logger;
  }
 
}

