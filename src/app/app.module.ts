import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import {appRouteModule} from './../app/configuration/app-routing-module'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MessageSenderComponent } from './components/message-sender/message-sender.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    MessageSenderComponent
  ],
  imports: [
    BrowserModule,
    appRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
