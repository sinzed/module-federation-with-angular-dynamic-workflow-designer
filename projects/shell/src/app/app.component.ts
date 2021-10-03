import { PluginOptions } from './plugins/plugin';
import { Component, OnInit } from '@angular/core';
import { LookupService } from './plugins/lookup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  plugins: PluginOptions[] = [];
  // workflow: PluginOptions[] = [];
  workflow2: PluginOptions;
  showConfig = false;

  constructor(
    private lookupService: LookupService) {
  }

  async ngOnInit(): Promise<void> {

  }
  toggle(): void {
    this.showConfig = !this.showConfig;
  }
}

