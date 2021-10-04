import { Component, Input, OnChanges, ViewChild, ViewContainerRef, ComponentFactoryResolver, Injector, Type } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { PluginOptions } from './plugin';

@Component({
    selector: 'mfe1-facebook',
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
    options2: PluginOptions;
    async ngOnInit(){
        this.options2 = await this.lookup2();
        const Component = await loadRemoteModule(this.options2)
            .then(m => m[this.options2.componentName]);
        const factory = this.cfr.resolveComponentFactory(Component);
        const compRef = this.viewContainer.createComponent(factory, null, this.injector);
    }
    async ngOnChanges() {
        this.viewContainer.clear();
        // this.options = await this.lookup2();
        this.options2 = await this.lookup2();
        // const Component = await loadRemoteModule(this.options)
        //     .then(m => m[this.options.componentName]);
        const Component = await loadRemoteModule(this.options2)
            .then(m => m[this.options2.componentName]);

        // Ivy --> ViewEngine
        const factory = this.cfr.resolveComponentFactory(Component);
        const compRef = this.viewContainer.createComponent(factory, null, this.injector);


    }

    lookup2(): Promise<PluginOptions> {
        return Promise.resolve(
            {
                remoteEntry: 'http://localhost:3000/remoteEntry.js',
                remoteName: 'mfeFacebook',
                exposedModule: './App',
    
                displayName: 'App',
                componentName: 'AppComponent'
            } as PluginOptions);
      }
}

