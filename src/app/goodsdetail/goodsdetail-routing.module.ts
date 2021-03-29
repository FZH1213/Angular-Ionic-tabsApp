import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoodsdetailPage } from './goodsdetail.page';

const routes: Routes = [
  {
    path: '',
    component: GoodsdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoodsdetailPageRoutingModule {}
