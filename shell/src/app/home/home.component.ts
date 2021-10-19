import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor() { }
  showConfig = false;
  loggedIn = false;
  ngOnInit() {
    const token = localStorage.getItem("token");
    if(token==="123456789"){
      this.loggedIn = true;
    }
  }

}
