import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopcarPage } from './shopcar.page';

const routes: Routes = [
  {
    path: '',
    component: ShopcarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopcarPageRoutingModule {}
