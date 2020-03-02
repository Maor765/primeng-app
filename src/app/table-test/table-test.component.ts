import { Component, OnInit } from '@angular/core';
import { Car } from './car';
import { CarService } from './CarService';

@Component({
  selector: 'app-table-test',
  templateUrl: './table-test.component.html',
  styleUrls: ['./table-test.component.scss']
})
export class TableTestComponent implements OnInit {

  cars: Car[];

  constructor(private carService: CarService) { }

  ngOnInit() {
      this.carService.getCarsSmall().subscribe(cars => this.cars = cars);
  }

}
