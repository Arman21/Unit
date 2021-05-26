import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { FormSecondComponent } from './components/form-second/form-second.component';

@NgModule({
  declarations: [
    FormComponent,
    FormSecondComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormComponent,
    FormSecondComponent
  ]
})

export class FormModule { }
