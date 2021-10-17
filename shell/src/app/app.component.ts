import { PluginOptions } from './remote-frontends/plugin';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  plugins: PluginOptions[] = [];
  // workflow: PluginOptions[] = [];
  workflow2: PluginOptions;
  showConfig = false;
  loggedIn = false;

  constructor() {
    localStorage.setItem("token","stragneworkd");
  }

  async ngOnInit(): Promise<void> {
    const token = localStorage.getItem("token");
    if(token==="123456789"){
      this.loggedIn = true;
    }
  }
  toggle(): void {
    this.showConfig = !this.showConfig;
  }
}

