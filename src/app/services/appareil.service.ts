import {Router} from '@angular/router';

export class AppareilService{





  appareils = [
    {id:1 ,name: 'Machine a laver', status: 'ALLUME',photo:'/assets/images/machine_laver.png'},
    {id:2 ,name: 'Ordinateur', status: 'Eteint',photo:'/assets/images/ordinateur.png'},
    {id:3 ,name: 'Lave vaisselle', status: 'Eteint',photo:'/assets/images/laveVaisselle.png'},
    {id:4 ,name: 'Refrigirateur', status: 'ALLUME',photo:'/assets/images/refrigirateur.png'},
    {id:5 ,name: 'Chaudiere', status: 'Eteint',photo:'/assets/images/chaudiere.png'},
    {id:6 ,name: 'Radiateur', status: 'ALLUME',photo:'/assets/images/radiateur.png'},

  ];

  numberOnAppareils = 0;
  numberOffAppareils = 0;
  numberAllAppareils = 0;


  OnSwitchOn()
  {
    for (const app of this.appareils){

      app.status = 'ALLUME';

    }
    this.numberOnAppareils = this.appareils.length;
    this.numberOffAppareils = 0;
  }

  OnSwitchOff(){

    for (const app of this.appareils){

      app.status = 'Eteint';
    }
    this.numberOffAppareils = this.appareils.length;
    this.numberOnAppareils = 0;

  }

// allume un appareil
switchOnOne(index: number){
    this.appareils[index].status = 'ALLUME';
    this.numberOnAppareils += 1;
}

// Eteint un appareil
  switchOffOne(index: number){
    this.appareils[index].status = 'Eteint';
    this.numberOffAppareils += 1;
  }

// Permet de gerer et d'indiquer le nombre d'appareils allumé
  getNumberOfOnAppareils(){
    if (this.numberOnAppareils < 0 ){
      this.numberOnAppareils = 0;

      return  this.numberOnAppareils;

    }else if (this.numberOnAppareils > this.appareils.length){

      this.numberOnAppareils = this.appareils.length;
      return this.numberOnAppareils;

    }else{
      return  this.numberOnAppareils;
    }

  }

// permet de lister et d'inscrire le nombre d'appareil Eteint
  getNumberOfOFFAppareils(){
    if (this.numberOffAppareils < 0 ){

      this.numberOffAppareils = 0;
      return  this.numberOffAppareils ;
    }else if (this.numberOffAppareils > this.appareils.length){
      this.numberOffAppareils = this.appareils.length;
      return this.numberOffAppareils;
    }else{
      return this.numberOffAppareils;
    }

  }


  getNumberAllAppareils(){

    return this.appareils.length;

  }

  getAppareilById(id:number){

    const nameAppareil = this.appareils.find(
      (nameApp) => {
       return  nameApp.id === id;
      });

    return nameAppareil;
  }

  getImageByAppareil(){


  }

}
