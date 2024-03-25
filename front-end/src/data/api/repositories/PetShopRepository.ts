import api from "../api";

import { IPetShop } from "../../interfaces/IPetShop";
import { IBestChoice } from "../../interfaces/IBestChoice";
import { IBestChoiceResponse } from "../../interfaces/IBestChoiceResponse";

export class PetShopRepository{
    
    public static async getPetShops(): Promise<IPetShop[]>{
        const response = await api.get<IPetShop[]>("/getPetShops")
        return response.data
    }

    public static async postBestChoice(bestChoice: IBestChoice): Promise<IBestChoiceResponse>{
        const response = await api.post<IBestChoiceResponse>("/bestChoice", bestChoice);
        return response.data
    }


}   