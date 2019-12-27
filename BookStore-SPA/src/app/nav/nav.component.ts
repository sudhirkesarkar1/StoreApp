import { Component, OnInit } from '@angular/core';
import { AuthService } from "../_services/auth.service";
import { AlertyfyService } from "../_services/AlertyfyService.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  constructor(private authService: AuthService, private alerifyService : AlertyfyService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model).subscribe(resp => {
      this.alerifyService.success('Logged in SuccesFully');
    },error =>{
      this.alerifyService.error(error);
    });
  }

  loggedIn(){
    return this.authService.loggedIn();
  }

  logout(){
    localStorage.removeItem('token');
    this.alerifyService.error('logged out');
  }

}
