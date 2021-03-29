import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopcarPageRoutingModule } from './shopcar-routing.module';

import { ShopcarPage } from './shopcar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopcarPageRoutingModule
  ],
  declarations: [ShopcarPage]
})
export class ShopcarPageModule {}
