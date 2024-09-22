import { createAction, props } from "@ngrx/store";
import { Bucket } from "../../../models/bucket.model";

export const addToBucket = createAction(
    '[Bucket] ADD',
    //PROPS USED FOR SENDING ALL THE PAYLOAD TO REDUCER
    props<{payload:Bucket}>()
)

export const removeToBucket = createAction(
    '[Bucket] REMOVE',
    //Partial use for not check all bucket only few item check from bucket
    props<{payload:Partial<Bucket>}>()
)