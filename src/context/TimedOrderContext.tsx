import { createContext, useContext, createEffect, type ParentComponent } from "solid-js";
import { createStore } from "solid-js/store";
import { fetchTimedOrders } from "../mock/api";
import type { TimedOrder } from "../types";

type TimedOrderContextValue = [
    state: TimedOrder[],
    actions: {
        handleOrder: (index: number) => void;
    }
]

const defaultState: TimedOrder[] = []

const TimedOrderContext = createContext<TimedOrderContextValue>([
    defaultState,
    {
        handleOrder: () => undefined
    }
])

export const TimedOrderContextProvider: ParentComponent = (props) => {
    const [state, setState] = createStore<TimedOrder[]>([])

    const handleOrder = (index: number) => {
        setState([
            ...state.slice(0, index),
            { ...state[index], capacity: state[index].booked ? state[index].capacity + 1 : state[index].capacity - 1, booked: !state[index].booked },
            ...state.slice(index + 1)
        ])
    }

    createEffect(async () => {
        // call API to fetch timed orders
        const timedOrders = await fetchTimedOrders()

        setState(timedOrders.map(order => {
            return { ...order, booked: false }
        }))
    })

    return <TimedOrderContext.Provider value={[state, { handleOrder }]}>
        {props.children}
    </TimedOrderContext.Provider>
}

export const useTimedOrderContext = () => useContext(TimedOrderContext)