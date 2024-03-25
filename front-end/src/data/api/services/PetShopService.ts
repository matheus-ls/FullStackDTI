import { IBestChoice } from "../../interfaces/IBestChoice";
import { IBestChoiceResponse } from "../../interfaces/IBestChoiceResponse";
import { IPetShop } from "../../interfaces/IPetShop";
import { PetShopRepository } from "../repositories/PetShopRepository";

export class PetShopService{
    public static async bestChoice(data: IBestChoice): Promise<IBestChoiceResponse>{
        try {
            const resultado = await PetShopRepository.postBestChoice(data)
            return resultado;
        } catch (error) {
            throw error
        }
    }



    public static async getAllPetShops(): Promise<IPetShop[]>{
        try{
            const petShops = await PetShopRepository.getPetShops();
            return petShops;
        }catch(error){
            throw error;
        }
    }
}