import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

    constructor(private http: HttpClient) {}

    getCarsSmall() {
      return this.http.get('./assets/cars-res.json')
        .pipe(map( res => res.data as Car[]));
    }
}
