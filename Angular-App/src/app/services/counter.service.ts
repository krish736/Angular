import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  count:number = 0

  getCounter (){
    return this.count
  }

  incrementCounter () {
    this.count = this.count + 1
  }
}
