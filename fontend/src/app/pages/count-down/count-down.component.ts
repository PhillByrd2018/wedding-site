import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})


export class CountDownComponent implements OnInit, OnDestroy {

  stringOfWedding = '2020-11-21T00:00:00';
  dateOfWedding = new Date(this.stringOfWedding);
  today = new Date();
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  timeUntil: number;
  subscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    console.log('clock comp. built');
    const source = interval(1000);

    this.subscription = source.subscribe(val => this.calculateTimeLeft());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private calculateTimeLeft() {
    this.timeUntil = this.dateOfWedding.getTime() - new Date().getTime();
    console.log('today date: ', this.today);
    console.log('time until: ', this.timeUntil);
    this.days = Math.floor(this.timeUntil / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((this.timeUntil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((this.timeUntil % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((this.timeUntil % (1000 * 60)) / 1000);

    console.log(this.days + 'd ' + this.hours + 'h '
    + this.minutes + 'm ' + this.seconds + 's ');
  }

}
