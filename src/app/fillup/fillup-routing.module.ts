import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FillupPage } from './fillup.page';

const routes: Routes = [
  {
    path: '',
    component: FillupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FillupPageRoutingModule {}
