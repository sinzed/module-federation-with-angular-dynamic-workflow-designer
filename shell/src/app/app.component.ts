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
  showFacebook = false;

  constructor() {
    localStorage.setItem("token","stragneworkd");
  }

  async ngOnInit(): Promise<void> {
    setTimeout(()=>{
        this.showFacebook = true;
    }, 2000);
  }
  toggle(): void {
    this.showConfig = !this.showConfig;
  }
}

