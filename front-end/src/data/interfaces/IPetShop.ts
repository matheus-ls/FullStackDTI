import { IWeekdayPrices } from "./PetShopPrices/IWeekdayPrices"
import { IWeekendPrices } from "./PetShopPrices/IWeekendPrices"

export interface IPetShop{
    id: string
    name: string,
    distance?: number,
    weekdayPrices?: IWeekdayPrices,
    weekendPrices?: IWeekendPrices
}