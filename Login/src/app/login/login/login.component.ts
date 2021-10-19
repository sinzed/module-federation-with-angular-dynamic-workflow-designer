import { HttpClient } from '@angular/common/http';
import {Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver, OnInit} from '@angular/core';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public username: string = "";
  public password: string = "";
  public error: string;
  public signedIn = false;
  constructor(private router: Router){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const token = localStorage.getItem("token");
    if(token==="123456789"){
      this.signedIn = true;
    }
  }
  logout(){
    localStorage.setItem("token","");
    this.signedIn = false;
    this.router.navigate(['/']);
  }

  checkAndLogin(){
    if(this.username === "123" && this.password === "123"){
      localStorage.setItem("token","123456789");
      this.error = "";
      this.signedIn = true;
      this.router.navigate(['/']);
    }
    else {
      this.error = "access denied"; 
    }
  }

}
