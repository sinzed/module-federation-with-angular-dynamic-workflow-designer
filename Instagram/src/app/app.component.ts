import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  postReceived=""
  ngOnInit(){
    window.addEventListener("message", (event) => {
      if (event.origin !== "http://localhost:5000")
        return;
        this.postReceived = event.data
        console.log(event);
        // alert("message received to instagram");
    
      // ...
    }, false);
  }
}
