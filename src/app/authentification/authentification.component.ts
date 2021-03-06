import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  authStatus : boolean;

  constructor(private  authService : AuthService, private  router : Router) {

  }

  ngOnInit(): void {

    this.authStatus= this.authService.isAuth;


  }




  connected(){
    this.authService.signIn().then( ()=>{
      this.authStatus = this.authService.isAuth;
      this.router.navigate(['appareils']);
    });
  }

  disconnected(){

    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
    console.log('vous etes deconnecté');
  }



}
