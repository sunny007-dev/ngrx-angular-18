import { createReducer } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";

const initialState: Grocery[] = [
    {"id":1, "name": "Apple", "type":"fruit"},
    {"id":2, "name": "Banana", "type":"fruit"},
    {"id":3, "name": "Bingo", "type":"snacks"},
    {"id":4, "name": "Lays", "type":"snacks"}
];

// const initialState: Grocery[] = [];
export const groceryReducer = createReducer(initialState);