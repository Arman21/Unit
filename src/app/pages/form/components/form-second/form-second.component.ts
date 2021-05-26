import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-second',
  templateUrl: './form-second.component.html',
  styleUrls: ['./form-second.component.css']
})

export class FormSecondComponent implements OnInit {
  @Input() parentValue: number;
  @Output() childValue: EventEmitter<number> = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {

  }

  addValue(): void {
    this.parentValue++;
    this.childValue.emit(this.parentValue);
  }

  subValue(): void {
    if (this.parentValue !== 0) {
      this.parentValue--;
      this.childValue.emit(this.parentValue);
    }
  }

  passMultiplier(value: number): void {
    if (value !== 0) {
      this.parentValue = value * 2;
      this.childValue.emit(this.parentValue);
    }
  }

  resetAllValues(value: number): void {
    value = 0;
    this.childValue.emit(value);
  }

}
