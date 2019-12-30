import { Component, OnInit } from '@angular/core';
import { AuthService } from "../_services/auth.service";
import { AlertyfyService } from "../_services/AlertyfyService.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  constructor(private authService: AuthService, private alerifyService : AlertyfyService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model).subscribe(resp => {
      this.alerifyService.success('Logged in SuccesFully');
    },error =>{
      this.alerifyService.error(error);
    },() => {
      this.router.navigate(['/books']);
    });
  }

  loggedIn(){
    return this.authService.loggedIn();
  }

  logout(){
    localStorage.removeItem('token');
    this.alerifyService.error('logged out');
    this.router.navigate(['/home']);
  }

}
