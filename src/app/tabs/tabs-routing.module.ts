import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'index',
        loadChildren: () => import('../index/index.module').then(m => m.IndexPageModule)
      },
      {
        path: 'goods',
        loadChildren: () => import('../goods/goods.module').then(m => m.GoodsPageModule)
      },
      {
        path: 'shopcar',
        loadChildren: () => import('../shopcar/shopcar.module').then(m => m.ShopcarPageModule)
      },
      {
        path: 'person',
        loadChildren: () => import('../person/person.module').then( m => m.PersonPageModule)
      },
      {
        path: 'detail',
        loadChildren: () => import('../detail/detail.module').then( m => m.DetailPageModule)
      },
      {
        path: 'goodsdetail',
        loadChildren: () => import('../goodsdetail/goodsdetail.module').then( m => m.GoodsdetailPageModule)
      },
      
      {
        path: '',
        redirectTo: '/tabs/index',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/index',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
