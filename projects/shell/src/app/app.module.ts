import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { ConfigComponent } from './config/config.component';
import { Mfe1AppComponent } from './plugins/mfe1-app.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    Mfe1AppComponent,
    ConfigComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
