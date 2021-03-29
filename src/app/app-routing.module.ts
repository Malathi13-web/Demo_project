import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';
import { PreviewComponent } from './preview/preview.component';

const routes: Routes = [

  {
    path: 'PreviewC', component: PreviewComponent},
  { path: 'MoneyTransfer', component: MoneyTransferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponent =[PreviewComponent,MoneyTransferComponent]