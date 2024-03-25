import { FastifyRequest, FastifyReply } from "fastify";
import { GetPetShopService } from "../repository/GetPetShopService";


class GetPetShopController{
   
    async getPetShops(request:FastifyRequest, response: FastifyReply){
        const petShopService = new GetPetShopService()
        const data = await petShopService.execute()
        response.send(data);
    }
}

export {GetPetShopController}