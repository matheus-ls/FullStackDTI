import { FastifyReply, FastifyRequest } from "fastify";
import { GetPetShopController } from "../../controllers/GetPetShopsController";

export async function createPetShop(request: FastifyRequest, response: FastifyReply) {
    return new GetPetShopController().getPetShops(request, response);
}