import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MessageSenderComponent} from '../components/message-sender/message-sender.component'

const routes: Routes = [
  {path:'messagesender',component :MessageSenderComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class appRouteModule { }