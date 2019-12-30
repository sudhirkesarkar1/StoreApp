import { Injectable, Inject } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../_services/auth.service";
import { AlertyfyService } from "../_services/AlertyfyService.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate{
    constructor(
        private authservice: AuthService,
        private router: Router,
        private alertify: AlertyfyService
    ){}

    canActivate(): boolean{
        if(this.authservice.loggedIn()){
            return true;
        }
        this.alertify.error('Access not allowed');
        this.router.navigate(['/home']);
        return false;
    }
}
