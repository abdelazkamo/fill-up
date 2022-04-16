import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FillupPageRoutingModule } from './fillup-routing.module';

import { FillupPage } from './fillup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FillupPageRoutingModule
  ],
  declarations: [FillupPage]
})
export class FillupPageModule {}
