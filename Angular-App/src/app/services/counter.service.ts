import { computed, Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private count = signal(0)
  doubleCount: Signal<number> = computed(()=>this.count() * 2)
  getCounter (){
    return this.count()
  }

  incrementCounter () {
    // this.count = this.count + 1
    // this.count.set(6)
    this.count.update((oldValue)=>{
      return oldValue + 1
    })
  }
}
