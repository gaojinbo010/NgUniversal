import { DefaultComponent } from './default';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const lazyRoutes: Routes = [
  { path: '', component: DefaultComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forChild(lazyRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class TestRoutingModule {
}
