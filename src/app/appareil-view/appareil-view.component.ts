import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {


  title = 'MOON PROJET ANGULAR';
  isAuth = false;
  message = 'non disponible' ;

  messageAppareilON = '- Nombre d\'appareil Allumé -' ;
  messageAppareilOff = '- Nombre d\'appareil Eteint -';
  messageStatus: any;

  nombreAppareilOff = 0;
  nombreAppareilOn = 0;
  nombreAppareilAll= 0;

  lastUpdate;

  appareils: any[];

  constructor(private appareilservice: AppareilService) {



    this.messageStatus = 'eteint';

    setTimeout(() => {

        this.CalculNomberAppareil();
        this.isAuth = true;
        this.message = 'Vous pouvez désormais cliquer !';
      },
      2000);

    //Mise a jour de la date au bout de 3secondes
    this.lastUpdate = new Promise((resolve, reject) => {
      setTimeout(() => {
        const date = new Date();
        resolve(date);
      }, 3000);
    });
  }


  OnAllumer(){
    this.message = 'Tout est désormais allumé';
    this.messageStatus = 'ALLUME';
    this.appareilservice.numberOnAppareils = this.appareilservice.appareils.length;

  }

// increment chaque valeur pour comptabiliser le nombre d'appareils Off ou On
  CalculNomberAppareil(){

    for (const app of this.appareils){

      if ( app.status === 'ALLUME')
      {
        this.nombreAppareilOn += 1;

      }else{
        this.nombreAppareilOff += 1;
      }
    }
    this.nombreAppareilAll = this.nombreAppareilOn + this.nombreAppareilOff;
  }

  // retourne le nombre d'appareils eteint
  getNombreAppareilOff(){
    return this.appareilservice.getNumberOfOFFAppareils();
  }
  // retourne le nombre d'appareils allumé
  getNombreAppareilOn(){
    return this.appareilservice.getNumberOfOnAppareils();
  }

  getAllNumberAppareills(){
    return this.appareilservice.getNumberAllAppareils();
  }



//permet d'allumer tout les appareils
  appareilOn(){
    this.appareilservice.OnSwitchOn();
  }
//permet d'eteindre tout les appareils
  appareilOff(){
    this.appareilservice.OnSwitchOff();
    this.nombreAppareilOff = this.appareilservice.appareils.length;
  }

  ngOnInit(): void {
    this.addElementAppareils();
    this.appareils = this.appareilservice.appareils;

  }


  addElementAppareils(){
  const lampe = {
    id: 7,
    name: 'lampe',
    status: 'Eteint',
    photo : 'aucune'
  };

  this.appareilservice.appareils.push(lampe);
  }
}
