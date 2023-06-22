import { BUY_TABLET } from "../type";

export const buyTablet = (TotalTablet) => {
    return {
        type: BUY_TABLET,
        payload: TotalTablet
    }
}