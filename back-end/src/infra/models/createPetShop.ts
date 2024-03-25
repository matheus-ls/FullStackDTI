import { FastifyReply, FastifyRequest } from "fastify";

import { CreatePetShopController } from "../../controllers/CreatePetShopController";

export async function createPetShop(request: FastifyRequest, response: FastifyReply) {
    return new CreatePetShopController().createPetShop(request, response);
}