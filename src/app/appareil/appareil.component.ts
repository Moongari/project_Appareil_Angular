import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {



  @Input() appareilStatus :string;
  @Input() appareilName :string;
  @Input() indexOfAppareils : number; //on recupere l'index de chaque element du  tableau appareils

  constructor(private appareilserice : AppareilService) { this.appareilStatus = 'Eteint';}
  ngOnInit(): void {

  }


  getStatus(){
    if(this.appareilStatus === 'Eteint'){
      return this.appareilStatus;
    }else if(this.appareilStatus === 'ALLUME'){
      return this.appareilStatus;
    }

  }

  getcolor(){
    if(this.appareilStatus === 'Eteint'){

      return 'red';
    }else{
      return  'green';
    }
  }


  onSwitchOn(){
    this.appareilserice.switchOnOne(this.indexOfAppareils);
    this.appareilserice.numberOffAppareils -=1;
  }

  onSwitchOff() {
    this.appareilserice.numberOnAppareils -=1;
    this.appareilserice.switchOffOne(this.indexOfAppareils);
  }

}
