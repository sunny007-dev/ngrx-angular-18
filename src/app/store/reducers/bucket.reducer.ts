import { createReducer, on } from "@ngrx/store";
import { Bucket } from "../../../models/bucket.model";
import { addToBucket, removeToBucket } from "../actions/bucket.action";

const initialState: Bucket[] = [];

export const bucketReducer = createReducer(
    initialState,
    //ADD TO BUCKET LOGIC
    on(addToBucket, (state, action) => {
        //CHECK IF ITEM IS EXIST IN BUCKET
        const isExist = state.find(item => item.id === action.payload.id)
        if (isExist) {
            // CHECK IF ITEM IS EXIST THAN UPDATE (INCREASE QUANTITY)
            return state.map((item) => {
                return item.id === action.payload?.id
                    ? { ...item, quantity: item.quantity + action.payload.quantity }
                    : item
            })
        } else {
            // CHECK IF NO EXIST THAN ADD ITEM TO BUCKET
            return [
                ...state,
                action.payload
            ]
        }
    }),
    // REMOVE ITEM FROM BUCKET
    on(removeToBucket, (state, action) => {
        const isExistingItem = state.find(item => item.id === action.payload.id);
        if (isExistingItem && isExistingItem.quantity > 1) {
            return state.map((item) => {
                return item.id === action.payload?.id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            })
        } else {
            return state.filter(item => item.id !== action.payload.id);
        }
    })
);