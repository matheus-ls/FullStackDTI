import { PetShopProps } from "../data/interface/PetShop";
import prismaClient from "../infra/database";


class CreatePetShopService{
    async execute({name,distance, weekdayPrices ,weekendPrices}: PetShopProps){
        if (!name) {
            throw new Error("Preencha todos os campos");
        }
        const petShop = await prismaClient.petShop.create({
            data: {
                name,
                distance,
                weekdayPrices: {
                    create: {
                        smallDogs: weekdayPrices?.smallDogs,
                        bigDogs: weekdayPrices?.bigDogs
                    }
                },
                weekendPrices: {
                    create: {
                        smallDogs: weekendPrices?.smallDogs,
                        bigDogs: weekendPrices?.bigDogs
                    }
                }
            },
            include: {
                weekdayPrices: true,
                weekendPrices: true,
            }
        });
        return petShop
    }
}

export { CreatePetShopService}