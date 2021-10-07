import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  ngOnInit(){
    console.log("token", localStorage.getItem("token"));
  }
  post(){
    window.postMessage("this is a post from facebook","http://localhost:5000/");
  }
}
