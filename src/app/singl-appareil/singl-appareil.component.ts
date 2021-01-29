import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-singl-appareil',
  templateUrl: './singl-appareil.component.html',
  styleUrls: ['./singl-appareil.component.css']
})
export class SinglAppareilComponent implements OnInit {

  name : string ='Appareil';
  status : string ='Status';
  constructor(private appareilService : AppareilService, private router : Router, private routeUrl : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.routeUrl.snapshot.params['id'];
    this.name = this.appareilService.getAppareilById(+id).name; // ici on Cast la valeur de l'ID pour obtenir une valeur numerique
    this.status = this.appareilService.getAppareilById(+id).status; // ici on Cast la valeur de l'ID pour obtenir une valeur numerique
  }


  goBackHome(){
    this.router.navigate(['./appareils']);
  }


}
