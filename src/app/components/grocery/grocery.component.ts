import { Component } from '@angular/core';
import { Grocery } from '../../../models/grocery.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { addToBucket, removeToBucket } from '../../store/actions/bucket.action';
import { selectGroceries, selectGroceryByType } from '../../store/selectors/grocery.selector';

@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.scss'
})
export class GroceryComponent {
  groceries$?:Observable<Grocery[]>;
  filteredGroceries$?:Observable<Grocery[]>
  
  constructor(private store: Store<{groceries: Grocery[]}>) {
    this.groceries$ = store.select('groceries');
  }


  onTypeChange(event: Event){
    const selectedType = (event.target as HTMLSelectElement).value;
    console.log(selectedType, 'TYPE IS -----------');
    if(selectedType) this.filteredGroceries$ = this.store.select(selectGroceryByType(selectedType));
    else this.filteredGroceries$ = undefined;
  }


  increment(item:Grocery){
    const payload = {
      id:item.id,
      name:item.name,
      quantity:1
    }
    // this.store.dispatch({type:'update', payload: payload})
    this.store.dispatch(addToBucket({payload}))

  }

  decrement(item:Grocery){
    const payload = {
      id:item.id
    }
    this.store.dispatch(removeToBucket({payload}))

  }

}
