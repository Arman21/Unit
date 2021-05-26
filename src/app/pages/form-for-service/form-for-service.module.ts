import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceFormComponent } from './components/service-form/service-form.component';
import { ServiceFormSecondComponent } from './components/service-form-second/service-form-second.component';
import { MakeCounterService } from './services/make-counter.service';

@NgModule({
  declarations: [
    ServiceFormComponent,
    ServiceFormSecondComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ServiceFormComponent,
    ServiceFormSecondComponent
  ]
})

export class FormForServiceModule { }
