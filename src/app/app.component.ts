  import {Component, Input, OnInit} from '@angular/core';
  import { Observable } from 'rxjs/observable';
  // tslint:disable-next-line:import-blacklist
  import 'rxjs/Rx';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent implements OnInit{

    secondes : number;
  constructor() {
  }
    title = 'MOON PROJET ANGULAR';

    ngOnInit(): void {

      const counter = Observable.interval(1000);

      counter.subscribe( (value :number )=>
                            {
                              this.secondes= value
                            },
                            (error:any) =>
                            {
                                console.log('error rencontré')
                            },
                    () =>{
                          console.log('Complete')
                        });


    }


  }
