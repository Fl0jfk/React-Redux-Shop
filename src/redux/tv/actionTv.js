import { BUY_TV } from "../type";

export const buyTv = (TotalTv) => {
    return {
        type: BUY_TV,
        payload: TotalTv
    }
}