import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './login/login.module';
export const APP_ROUTES: Routes = [
  {
    path: 'login',
    component: AppComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    LoginModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
