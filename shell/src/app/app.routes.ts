import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConfigComponent } from './config/config.component';
import { MfeLoginComponent } from './remote-frontends/mfeLogin.component';
import { Mfe1FacebookComponent } from './remote-frontends/mfeFacebook.component';
import { loadRemoteModule } from '@angular-architects/module-federation';


export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },
 

    {
      path: 'login',
      loadChildren: () =>
      loadRemoteModule({
          remoteEntry: 'http://localhost:8079/remoteEntry.js',
          remoteName: 'mfeLogin',
          exposedModule: './Module'
      })
      .then(m => m.LoginModule)
},
    {
      path: 'config',
      component: ConfigComponent
    }
];
