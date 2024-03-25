import { FastifyRequest, FastifyReply } from "fastify";
import { CreatePetShopService} from "../repository/CreatePetShopService";
import { PetShopProps } from "../data/interface/PetShop";


class CreatePetShopController{
    
    async createPetShop(request:FastifyRequest, response:FastifyReply){
        const {name, distance, weekdayPrices, weekendPrices} = request.body as PetShopProps;

        const petShopService = new CreatePetShopService()
        const petShop = await petShopService.execute({
            name: name,
            distance: distance|| undefined, 
            weekdayPrices:weekendPrices,
            weekendPrices:weekdayPrices,
        });
        response.send(petShop);
    }
}

export {CreatePetShopController}