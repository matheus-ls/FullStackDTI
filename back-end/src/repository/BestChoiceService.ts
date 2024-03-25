import { BestChoiceProps } from "../data/interface/bestChoice";
import { PetShopProps } from "../data/interface/PetShop";
import { GetPetShopService } from "./GetPetShopService";




class BestChoiceService {
    async execute({ data, smallDogs, bigDogs }: BestChoiceProps) {
        const petShopService = new GetPetShopService();
        const petShops = await petShopService.execute();
        
        const resultado = calcularCustoTotal(data, smallDogs, bigDogs, petShops);
        
        return resultado;
    }
}

export { BestChoiceService}

function calcularCustoTotal(data: string, smallDogs: number, bigDogs: number, petShops: PetShopProps[]) {
    
    const dataObj = new Date(data);
    const diaSemana = dataObj.getDay(); 

    
    const isDiaSemana = diaSemana >= 1 && diaSemana <= 5;

    
    const precos = isDiaSemana ? 'weekdayPrices' : 'weekendPrices';

    
    
    const custosTotais = petShops.map(petshop => {
        const custoTotal = smallDogs * petshop[precos].smallDogs + bigDogs * petshop[precos].bigDogs;
        return {
            petshop: petshop.name,
            precoTotal: custoTotal,
            distance: petshop.distance || 0
        };
    });

    
    custosTotais.sort((a, b) => {
        if (a.precoTotal !== b.precoTotal) {
            return a.precoTotal - b.precoTotal;
        } else {
            return a.distance - b.distance;
        }
    });

    
    return custosTotais[0];
}
