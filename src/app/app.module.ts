import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import {FormsModule} from '@angular/forms';
import {AppareilService} from './services/appareil.service';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthService} from './services/auth.service';
import { SinglAppareilComponent } from './singl-appareil/singl-appareil.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {AuthGardService} from './services/auth-gard-service';

// ici on definit des routes sous forme de tableau
// ensuite on importe les RoutersModule
const appRoutes : Routes =[

  {path: 'appareils', canActivate:[AuthGardService], component: AppareilViewComponent},
  {path: 'appareils/:id', canActivate:[AuthGardService], component: SinglAppareilComponent},
  {path: 'Auth', component: AuthentificationComponent},
  {path: '', component: AppareilViewComponent},
  {path: 'not-found', component: PagenotfoundComponent},
  {path: '**', redirectTo: '/not-found'} // toujours place cela a la fin de toutes les routes


];

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthentificationComponent,
    AppareilViewComponent,
    SinglAppareilComponent,
    PagenotfoundComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) // on dit au Router angular que toutes les routes se trouve dans cette constante
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
