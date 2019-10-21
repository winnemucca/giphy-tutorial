import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'welcome-list', loadChildren: () => import('./welcome/welcome-routing.module').then(m => m.WelcomeRoutingModule) },
  { path: 'giphy-search', loadChildren: () => import('./giphy-search/giphy-search-routing.module').then(m => m.GiphySearchRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
