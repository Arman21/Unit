import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageRoutingModule } from './main-page-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule
  ],
  exports: [
    HomePageComponent
  ]
})

export class MainPageModule { }
