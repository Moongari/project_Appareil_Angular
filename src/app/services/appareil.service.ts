export class AppareilService{

  appareils =[
    {name:'Machine a laver', status:'ALLUME'},
    {name:'Ordinateur', status:'Eteint'},
    {name:'Lave vaisselle', status:'Eteint'},
    {name:'Refrigirateur', status:'ALLUME'},
    {name:'Chaudiere', status:'Eteint'},
    {name:'Radiateur', status:'ALLUME'},

  ];

  numberOnAppareils : number = 0;
  numberOffAppareils : number = 0;
  numberAllAppareils : number = 0;


  OnSwitchOn()
  {
    for (const app of this.appareils){

      app.status = 'ALLUME';
    }

  }

  OnSwitchOff(){

    for (const app of this.appareils){

      app.status = 'Eteint';
    }


  }


switchOnOne(index :number){
    this.appareils[index].status = 'ALLUME';
    this.numberOnAppareils +=1;
}


  switchOffOne(index :number){
    this.appareils[index].status = 'Eteint';
    this.numberOffAppareils +=1;
  }


  getNumberOfOnAppareils(){
    if(this.numberOnAppareils < 0 ){
      this.numberOnAppareils = 0;

      return  this.numberOnAppareils;

    }else if (this.numberOnAppareils > this.appareils.length){

      this.numberOnAppareils = this.appareils.length;
      return this.numberOnAppareils;

    }else{
      return  this.numberOnAppareils;
    }

  }


  getNumberOfOFFAppareils(){
    if(this.numberOffAppareils <0 ){

      this.numberOffAppareils = 0
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

}
