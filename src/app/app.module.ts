import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import {appRouteModule} from './../app/configuration/app-routing-module'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MessageSenderComponent } from './components/message-sender/message-sender.component';
import { NetworkComponent } from './components/network/network.component';
import { CreateMessageSenderComponent } from './components/create-message-sender/create-message-sender.component';
import { UploadJarComponent } from './components/upload-jar/upload-jar.component';
import { ListComponentComponent } from './components/list-component/list-component.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    MessageSenderComponent,
    NetworkComponent,
    CreateMessageSenderComponent,
    UploadJarComponent,
    ListComponentComponent
  ],
  imports: [
    BrowserModule,
    appRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
