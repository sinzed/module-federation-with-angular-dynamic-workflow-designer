import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { ConfigComponent } from './config/config.component';
import { Mfe1FacebookComponent } from './remote-frontends/mfeFacebook.component';
import { MfeInstgramComponent } from './remote-frontends/mfeInstgram.component';
import { MfeLoginComponent } from './remote-frontends/mfeLogin.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    Mfe1FacebookComponent,
    MfeLoginComponent,
    MfeInstgramComponent,
    ConfigComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
