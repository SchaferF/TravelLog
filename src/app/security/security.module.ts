import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';

@NgModule({
  declarations: [LoginPageComponent, LogoutButtonComponent, RegisterPageComponent, DeleteButtonComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [LoginPageComponent, LogoutButtonComponent, RegisterPageComponent, DeleteButtonComponent],
})
export class SecurityModule { }
