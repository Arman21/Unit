import { Component, OnInit } from '@angular/core';
import { MakeCounterService } from './../../services/make-counter.service';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})

export class ServiceFormComponent implements OnInit {

  constructor(public makeCounter: MakeCounterService) {

  }

  ngOnInit(): void {

  }

}
