import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from "./_services/auth.service";
import { ErrorInterceptorProvider } from './_services/ErrorInterceptor.service';
import { BsDropdownModule } from "ngx-bootstrap";
import { AlertyfyService } from './_services/AlertyfyService.service';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      NavComponent,
      RegisterComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot()
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertyfyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
