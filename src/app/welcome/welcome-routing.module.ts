import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WelcomeComponent } from './welcome.component';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from '../user-list/user-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared-routing.module';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forChild(routes),
    FontAwesomeModule
  ],
  declarations: [
    WelcomeComponent,
    UserListComponent
  ],
  exports: [
    WelcomeComponent,
    UserListComponent
  ]
})

export class WelcomeRoutingModule {
}
