import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  value: number = 0;

  constructor() {

  }

  ngOnInit(): void {

  }

  addValue(): void {
    this.value++;
  }

  subValue(): void {
    if (this.value !== 0) {
      this.value--;
    }
  }

  passMultiplier(val: number): void {
    if (this.value !== 0) this.value = val * 2;
  }

  getData(data: number): void {
    this.value = data;
  }

}
