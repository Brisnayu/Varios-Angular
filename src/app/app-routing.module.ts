import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(mod => mod.HomeModule) },
  { path: 'directives', loadChildren: () => import('./features/directives/directives.module').then(mod => mod.DirectivesModule) },
  { path: 'pipes', loadChildren: () => import('./features/pipes/pipes.module').then(mod => mod.PipesModule) },
  { path: 'services', loadChildren: () => import('./features/services/services.module').then(mod => mod.ServicesModule) },
  { path: 'form', loadChildren: () => import('./features/form/form.module').then(mod => mod.FormModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
