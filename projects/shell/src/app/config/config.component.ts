import { Component, OnInit } from '@angular/core';
import { PluginOptions } from '../remote-frontends/plugin';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html'
})
export class ConfigComponent implements OnInit {

  constructor() { }

  config: PluginOptions[];

  async ngOnInit() {
  }

}
