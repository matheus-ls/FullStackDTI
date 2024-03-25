import { WeekdayPricesProps } from "./WeekdayPrices";
import { WeekendPricesProps } from "./WeekendPrices";



export interface PetShopProps {
    name: string;
    distance?: number | null;
    weekdayPrices: WeekdayPricesProps
    weekendPrices: WeekendPricesProps
}
