import { BUY_PHONE } from "../type";

export const buyPhone = TotalPhone => {
    return {
        type: BUY_PHONE,
        payload: TotalPhone
    }
}