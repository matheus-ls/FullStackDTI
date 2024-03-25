import { FastifyInstance, FastifyPluginOptions, FastifyRequest,FastifyReply } from "fastify";
import { getPetShops } from "./infra/models/getPetShops";
import { createPetShop } from "./infra/models/createPetShop";
import { bestChoice } from "./infra/models/bestChoice";


import { PORT } from "./server";


export async function routes(fastify:FastifyInstance, options: FastifyPluginOptions) {
    
    fastify.get("/", async(request:FastifyRequest , response: FastifyReply) =>{
        return `Server is running in ${PORT}`
    })
    fastify.post("/create", async(request:FastifyRequest , response: FastifyReply)=>{
        return createPetShop(request,response);
    })
    fastify.get("/getPetShops", async(request:FastifyRequest, response:FastifyReply)=>{
        return  getPetShops(request,response);
    })
    fastify.post("/bestChoice", async (request:FastifyRequest, response:FastifyReply)=>{
        return bestChoice(request,response);
    })
}
