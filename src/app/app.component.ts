  import {Component, Input, OnDestroy, OnInit} from '@angular/core';
  import { Observable } from 'rxjs/observable';
  // tslint:disable-next-line:import-blacklist
  import 'rxjs/Rx';
  import {Subscription} from 'rxjs';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent implements OnInit, OnDestroy{

    secondes : number;
    counterSubscription : Subscription;

  constructor() {
  }
    title = 'MOON PROJET ANGULAR';

    ngOnInit(): void {

      const counter = Observable.interval(1000);

      this.counterSubscription = counter.subscribe( (value :number )=>
                            {
                              this.secondes= value;
                            });


    }

    ngOnDestroy(): void {

      this.counterSubscription.unsubscribe();
    }


  }
