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

  constructor() {
    localStorage.setItem("token","stragneworkd");
  }

  async ngOnInit(): Promise<void> {

  }
  toggle(): void {
    this.showConfig = !this.showConfig;
  }
}

