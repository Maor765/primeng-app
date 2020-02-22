import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value = new Date();
  selectedValues: string[] = [];
  cars = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];

  cities: any[];

  selectedCities: any[];

  constructor() {
    this.cities = [
      {name: 'New York'},
      {name: 'Rome'},
      {name: 'London'},
      {name: 'Istanbul'},
      {name: 'Paris'}
    ];
  }

  userInput: any;
  handleClick($event) {
    this.cities = [...this.cities, {name:this.userInput}];
  }

}
