import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './login/login.module';
import { FormsModule } from '@angular/forms';
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
    FormsModule,
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
