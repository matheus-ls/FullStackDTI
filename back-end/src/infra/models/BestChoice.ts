import { FastifyReply, FastifyRequest } from "fastify";
import { BestChoiceController } from "../../controllers/bestChoiceController";


export async function bestChoice(request: FastifyRequest, response: FastifyReply) {
    return new BestChoiceController().bestChoice(request, response);
}