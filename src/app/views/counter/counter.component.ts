import {Component, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  counterChange: EventEmitter<null> = new EventEmitter<null>();
  counter: number;
  output: string;

  constructor() {
    this.counter = 0;
    this.counterChange.subscribe(
      () => this.output = this.counter.toString()
    );
  }

  decreaseCounter(): void {
    this.counter--;
    this.counterChange.emit();
  }

  increaseCounter(): void {
    this.counter++;
    this.counterChange.emit();
  }
}


