import { configureStore } from "@reduxjs/toolkit";
import responseBestChoiceReducer from "./BestChoiceSlice";

export const store = configureStore({
    reducer:{
        responseBestChoice: responseBestChoiceReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch