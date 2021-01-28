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

// ici on definit des routes sous forme de tableau
// ensuite on importe les RoutersModule
const appRoutes : Routes =[

  {path: 'appareils', component: AppareilViewComponent},
  {path: 'Auth', component: AuthentificationComponent},
  {path: '', component: AppareilViewComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthentificationComponent,
    AppareilViewComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) // on dit au Router angular que toutes les routes se trouve dans cette constante
  ],
  providers: [
    AppareilService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
