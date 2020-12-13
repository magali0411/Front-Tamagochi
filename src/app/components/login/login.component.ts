import { Component, OnInit, Output } from '@angular/core';
import {DatePipe, formatDate} from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Input } from '@angular/core';
import { Logger } from './logger';
import { Observable } from 'rxjs';
import { LoginService } from '../../service/auth/login.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})

export class LoginComponent implements OnInit {

  constructor(
    private authenticationService: LoginService) { }

  ngOnInit(): void {
  }

  //@Input() userRequest : user ;
  
  todayDate : Date = new Date();
  user : Logger = new Logger();
  
  submitted = false;


  onSubmit() {
    this.submitted = true;
    this.authenticationService.loginService(this.user);
  }

  
  newUser() {
    this.user = new Logger();
    console.log('création du nouvel utilisateur');
    this.authenticationService.newUser(this.user);
  }


   


    // const logger:Observable<Logger> = this.http.post<Logger>('http://localhost:8080/login/'+this.user.username+'/'+this.user.password+'/',this.user);
    // logger.subscribe(logger => {
    //     this.user = logger;
    //     console.log(this.user);
    // })

    //console.log('User : ' + this.user.username + ', mdp : ' + this.user.password);
    
    //this.http.post<Logger>('http://127.0.0.1:4200/login/' + this.user.username, this.user);
  //};




}