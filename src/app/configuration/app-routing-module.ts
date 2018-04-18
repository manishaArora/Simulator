import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MessageSenderComponent} from '../components/message-sender/message-sender.component';
import {CreateMessageSenderComponent} from '../components/create-message-sender/create-message-sender.component';
import {ListComponentComponent} from '../components/list-component/list-component.component';
import {UploadJarComponent} from '../components/upload-jar/upload-jar.component';

const routes: Routes = [
  {path:'messagesender',component :MessageSenderComponent},
  {path:'createmsgsender',component :CreateMessageSenderComponent},
  {path:'comptype',component :ListComponentComponent},
  {path:'uploadJar',component :UploadJarComponent}
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