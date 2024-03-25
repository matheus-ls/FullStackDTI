import { WeekdayPrices, WeekendPrices } from '@prisma/client';
import prismaClient from '../infra/database';
import { WeekendPricesProps } from '../data/interface/WeekendPrices';
import { WeekdayPricesProps } from '../data/interface/WeekdayPrices';

class GetPetShopService {
    async execute() {
        const data = await prismaClient.petShop.findMany({
            include: {
                weekdayPrices: true,
                weekendPrices:true
            }
        });

        const petShopWithPrices = data.map(petShop => ({
            id: petShop.id,
            name: petShop.name,
            distance: petShop.distance,
            weekdayPrices: mapWeekdayPrices(petShop.weekdayPrices),
            weekendPrices: mapWeekendPrices(petShop.weekendPrices)
        }));

        return petShopWithPrices;
    }
}
export { GetPetShopService };

function mapWeekdayPrices(weekdayPrices: WeekdayPrices | null): WeekdayPricesProps | null {
    if (!weekdayPrices) {
        return null;
    }

    return {
        id: weekdayPrices.id,
        smallDogs: weekdayPrices.smallDogs,
        bigDogs: weekdayPrices.bigDogs
    };
}
function  mapWeekendPrices ( weekendPrices : WeekendPrices | null): WeekendPricesProps| null {
    if (!weekendPrices) {
        return null;
    }
    return {
        id: weekendPrices.id,
        smallDogs: weekendPrices.smallDogs,
        bigDogs: weekendPrices.bigDogs
    };
}



