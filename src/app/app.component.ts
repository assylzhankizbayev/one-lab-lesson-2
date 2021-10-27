import { Component, OnInit } from '@angular/core';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lesson2';

  constructor(private logService: LoggerService) {
  }

  ngOnInit() {
    this.logService.log('hello service');
  }
}
