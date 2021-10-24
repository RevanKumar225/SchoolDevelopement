import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoolService {

  constructor() {}

  getData() {
    return of([
      {
        id: "1",
        coolData: 10,
        date: "Fri 24 Jul 2020 00:00:00 GMT"
      },
      {
        id: "2",
        coolData: 20,
        date: "Sat 25 Jul 2020 00:00:00 GMT"
      },
      {
        id: "3",
        coolData: 30,
        date: "Sun 26 Jul 2020 00:00:00 GMT"
      },
      {
        id: "4",
        coolData: 10,
        date: "Mon 27 Jul 2020 00:00:00 GMT"
      },
      {
        id: "5",
        coolData: 50,
        date: "Tue 28 Jul 2020 00:00:00 GMT"
      },
      {
        id: "6",
        coolData: 5,
        date: "Wed 29 Jul 2020 00:00:00 GMT"
      }
    ]);
  }
}
