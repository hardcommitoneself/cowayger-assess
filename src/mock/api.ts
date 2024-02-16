import { timedOrders } from "./data"
import type { TimedOrder } from "../types"

export const fetchTimedOrders = async (): Promise<TimedOrder[]> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(timedOrders)
        }, 500)
    })
}