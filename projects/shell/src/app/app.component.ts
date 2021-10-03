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

  lookup(): Promise<PluginOptions[]> {
    return Promise.resolve([
        {
            remoteEntry: 'http://localhost:3000/remoteEntry.js',
            remoteName: 'mfe1',
            exposedModule: './Download',

            displayName: 'Download',
            componentName: 'DownloadComponent'
        }
    ] as PluginOptions[]);
  }
  lookup2(): Promise<PluginOptions> {
    return Promise.resolve(
        {
            remoteEntry: 'http://localhost:3000/remoteEntry.js',
            remoteName: 'mfe1',
            exposedModule: './Download',

            displayName: 'Download',
            componentName: 'DownloadComponent'
        } as PluginOptions);
  }

  async ngOnInit(): Promise<void> {
    // this.workflow = await this.lookup();
    // this.workflow = this.plugins;
    this.workflow2 = await this.lookup2();
  }

  // add(plugin: PluginOptions): void {
  //   this.workflow.push(plugin);
  // }

  toggle(): void {
    this.showConfig = !this.showConfig;
  }
}

