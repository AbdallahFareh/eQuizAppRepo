import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable()
export class Authorisationguard {
  constructor(private auth: AuthService,private _router:Router){
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if(this.auth.isAuthenticated){
      let requiredRoles=route.data['roles'];
      let userRoles:string[] =this.auth.roles;

       for(let role of userRoles){
        if(requiredRoles.includes(userRoles)){
          return true;
        }
       }
      return false;
  }
  else {
    this._router.navigateByUrl('/login')
       return false;
  }
  
}
}