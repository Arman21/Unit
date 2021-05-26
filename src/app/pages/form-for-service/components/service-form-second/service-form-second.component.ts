import { Component, OnInit } from '@angular/core';
import { MakeCounterService } from './../../services/make-counter.service';

@Component({
  selector: 'app-service-form-second',
  templateUrl: './service-form-second.component.html',
  styleUrls: ['./service-form-second.component.css']
})

export class ServiceFormSecondComponent implements OnInit {

  constructor(public makeCounter: MakeCounterService) {

   }

  ngOnInit(): void {

  }

}
