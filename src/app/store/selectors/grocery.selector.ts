import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";

//IT IS USED TO MODIFY BUCKET RESULT BEFORE RENDERING ON PAGE
//BENEFIT FOR THIS IS WE MODIFY THIS ONLY ONE PLACE
//SELECTOR ARE MOMORIZED SELECTOR (RUN SINGLE TIME AND AFTER THAT CACHE VALUE) FOR BETTER PERFORMANCE

//Both are the same working on their way
// export const selectGroceries = (state: {groceries:Grocery[]}) => state.groceries;
export const selectGroceries = createFeatureSelector<(Grocery[])>('groceries');

export const selectGroceryByType = (type:string) => createSelector(
    selectGroceries,
    (state) => {
        return state.filter(x => x.type == type)
    }
);