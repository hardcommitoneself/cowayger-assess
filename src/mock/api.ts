import { timedOrders } from "./data"
import { DataTimedOrder } from "../types"

export const fetchTimedOrders = async (): Promise<DataTimedOrder[]> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(timedOrders)
        }, 500)
    })
}