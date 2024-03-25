import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBestChoiceResponse } from "../../data/interfaces/IBestChoiceResponse"; // Verifique se o caminho está correto

interface ResponseBestChoiceState {
    name: string;
    precoTotal: number;
}

const initialState: ResponseBestChoiceState = {
    name: '',
    precoTotal: 0,
};

export const responseBestChoiceSlice = createSlice({
    name: 'responseBestChoice',
    initialState,
    reducers: {
        setResponseBestChoice: (state, action: PayloadAction<IBestChoiceResponse>) => {
            state.name = action.payload.petshop
            state.precoTotal = action.payload.precoTotal
        }

    }});

export const { setResponseBestChoice } = responseBestChoiceSlice.actions;

export default responseBestChoiceSlice.reducer;
