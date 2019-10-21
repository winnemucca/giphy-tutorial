import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GiphySearchComponent } from './giphy-search.component';
import { SharedModule } from '../shared/shared-routing.module';

const routes: Routes = [
  { path: 'giphy', component: GiphySearchComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    GiphySearchComponent
  ],
  exports: [
    GiphySearchComponent
  ]
})

export class GiphySearchRoutingModule {
}
