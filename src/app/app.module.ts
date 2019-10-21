import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { WelcomeRoutingModule } from './welcome/welcome-routing.module';
import { SharedModule } from './shared/shared-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './data.service';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { GiphySearchRoutingModule } from './giphy-search/giphy-search-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService, {
      passThruUnknownUrl: true
    }),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    WelcomeRoutingModule,
    GiphySearchRoutingModule
  ],
  providers: [
    BsModalRef // may not need here ** review before submitting fix noted github
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
