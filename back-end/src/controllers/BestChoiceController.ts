import { FastifyReply, FastifyRequest } from "fastify";
import { BestChoiceProps } from "../data/interface/bestChoice";
import { BestChoiceService } from "../repository/BestChoiceService";

class BestChoiceController{
    async bestChoice(request:FastifyRequest, response:FastifyReply){
        const {data, smallDogs, bigDogs} = request.body as BestChoiceProps;
        const bestChoiceService = new BestChoiceService()
        const bestChoice = await bestChoiceService.execute({
            data,
            smallDogs,
            bigDogs
        })
        return response.send(bestChoice)
    }
}

export{BestChoiceController}