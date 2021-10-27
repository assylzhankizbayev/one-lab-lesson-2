import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  count = 1;

  constructor() { }

  inc() {
    this.count++;
  }

  dec() {
    this.count--;
  }
}
