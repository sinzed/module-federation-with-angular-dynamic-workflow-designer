import { Component, Input, OnChanges, ViewChild, ViewContainerRef, ComponentFactoryResolver, Injector, Type } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { PluginOptions } from './plugin';

@Component({
    selector: 'mfeFacebook',
    template: `
        <ng-container #placeHolder></ng-container>
    `
})
export class Mfe1FacebookComponent implements OnChanges {
    @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
    viewContainer: ViewContainerRef;

    constructor(
      private injector: Injector,
      private cfr: ComponentFactoryResolver) { }

    // @Input() options: PluginOptions;
    options: PluginOptions;
    async ngOnInit(){
        this.options = await this.lookup();
        const Component = await loadRemoteModule(this.options)
            .then(m => m[this.options.componentName]);
        const factory = this.cfr.resolveComponentFactory(Component);
        const compRef = this.viewContainer.createComponent(factory, null, this.injector);
    }
    async ngOnChanges() {
        this.viewContainer.clear();
        this.options = await this.lookup();
        const Component = await loadRemoteModule(this.options)
            .then(m => m[this.options.componentName]);

        // Ivy --> ViewEngine
        const factory = this.cfr.resolveComponentFactory(Component);
        const compRef = this.viewContainer.createComponent(factory, null, this.injector);


    }

    lookup(): Promise<PluginOptions> {
        return Promise.resolve(
            {
                remoteEntry: 'http://localhost/mfeFacebook/remoteEntry.js',
                remoteName: 'mfeFacebook',
                exposedModule: './App',
    
                displayName: 'App',
                componentName: 'AppComponent'
            } as PluginOptions);
      }
}

