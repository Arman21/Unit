import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MakeCounterService {
  value: number = 0;

  constructor() {

  }

  addValue(): void {
    this.value++;
  }

  subValue(): void {
    if (this.value !== 0) this.value--;
  }

  passMultiplier(value: number): void {
    if (this.value !== 0) this.value = value * 2;
  }

  resetAllValues(val: number): void {
    this.value = 0;
  }

}
