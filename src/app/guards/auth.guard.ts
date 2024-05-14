import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable()
export class AuGuard {
  constructor(private authservice: AuthService,private _router:Router){
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if(this.authservice.isAuthenticated){
        return true;
    }
    else {
      this._router.navigateByUrl('/login')
         return false;
    }
   
  }
  
}