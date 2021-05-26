import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './templates/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-page',
    pathMatch: 'full'
  },
  {
    path: 'home-page',
    loadChildren: async () => (await import ('./pages/main-page/main-page.module')).MainPageModule
  },
  {
    path: 'simple-counter',
    loadChildren: async () => (await import ('./pages/simple-counter/simple-counter.module')).SimpleCounterModule
  },
  {
    path: 'service-counter',
    loadChildren: async () => (await import ('./pages/service-counter/service-counter.module')).ServiceCounterModule
  },
  {
    path: 'ngrx-counter',
    loadChildren: async () => (await import ('./pages/ngrx-counter/ngrx-counter.module')).NgrxCounterModule
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
