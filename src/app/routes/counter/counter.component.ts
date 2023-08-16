import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { increament,decreament,reset } from 'src/app/state/counter.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counter !: number;
  constructor(
    private store: Store<{counter: { counter: number}}>) {}

    ngOnInit(): void {
      this.store.select('counter').subscribe((data) => {
        this.counter =data.counter;
      });
    }

increament(){
  this.store.dispatch(increament());
}
decreament(){
  this.store.dispatch(decreament());
}
reset(){
  this.store.dispatch(reset());
}




}
