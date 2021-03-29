import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoodsdetailPageRoutingModule } from './goodsdetail-routing.module';

import { GoodsdetailPage } from './goodsdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoodsdetailPageRoutingModule
  ],
  declarations: [GoodsdetailPage]
})
export class GoodsdetailPageModule {}
