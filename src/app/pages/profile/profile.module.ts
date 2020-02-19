import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ThemeModule } from '../../@theme/theme.module';
import { IndexComponent } from './index/index.component';
import { NbCardModule, NbInputModule, NbButtonModule, NbListModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProfileComponent, IndexComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ThemeModule,
    NbCardModule,
    FormsModule,
    ReactiveFormsModule,
    NbInputModule,
    NbButtonModule,
    NbListModule,
  ]
})
export class ProfileModule { }
