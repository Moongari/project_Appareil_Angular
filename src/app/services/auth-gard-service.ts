import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
@Injectable()
export class AuthGardService implements CanActivate{

  constructor(private authservice : AuthService, private route: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> |  boolean
  {

    if(this.authservice.isAuth)
    {
      return  true;
    }else{

      this.route.navigate(['/Auth']);
    }

  }
}
