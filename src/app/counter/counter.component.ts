import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
  }

  inc() {
    this.counterService.inc();
  }

  dec() {
    this.counterService.dec();
  }

  get count() {
    console.count('count');

    return this.counterService.count;
  }

}
