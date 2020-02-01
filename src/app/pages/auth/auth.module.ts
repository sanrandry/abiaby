import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ThemeModule } from '../../@theme/theme.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NbCardModule, NbInputModule, NbButtonModule, NbAlertModule } from '@nebular/theme';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ThemeModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    ReactiveFormsModule,
    FormsModule,
    NbAlertModule,
  ],
})
export class AuthModule { }
