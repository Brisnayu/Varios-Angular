import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './features/services/components/not-found/not-found.component';
import { MaintenanceComponent } from './features/services/components/maintenance/maintenance.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(mod => mod.HomeModule) },
  { path: 'directives', loadChildren: () => import('./features/directives/directives.module').then(mod => mod.DirectivesModule) },
  { path: 'pipes', loadChildren: () => import('./features/pipes/pipes.module').then(mod => mod.PipesModule) },
  { path: 'services', loadChildren: () => import('./features/services/services.module').then(mod => mod.ServicesModule) },
  { path: 'form', loadChildren: () => import('./features/form/form.module').then(mod => mod.FormModule) },
  { path: 'maintenance', component: MaintenanceComponent },
  { path: 'notFound', component: NotFoundComponent },
  { path: '**', redirectTo: '/notFound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
