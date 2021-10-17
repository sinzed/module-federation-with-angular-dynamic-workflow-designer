import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { LOGIN_ROUTES } from './login.routes';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LOGIN_ROUTES)
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
