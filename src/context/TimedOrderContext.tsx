import { createContext, useContext, createEffect, type ParentComponent } from "solid-js";
import { createStore } from "solid-js/store";
import { fetchTimedOrders } from "../mock/api";
import type { TimedOrder } from "../types";

type TimedOrderContextValue = [
    state: {
        timedOrders: TimedOrder[];
        currentDate: string;
        currentSelectedOrder: number;
    },
    actions: {
        handleOrder: (index: number) => void;
        handleSetCurrentDate: (currentDate: string) => void;
    }
]

const defaultState = {
    timedOrders: [],
    currentDate: 'TODAY',
    currentSelectedOrder: -1
}

const TimedOrderContext = createContext<TimedOrderContextValue>([
    defaultState,
    {
        handleOrder: () => undefined,
        handleSetCurrentDate: () => undefined
    }
])

export const TimedOrderContextProvider: ParentComponent = (props) => {
    const [state, setState] = createStore<{ timedOrders: TimedOrder[], currentDate: string, currentSelectedOrder: number }>(defaultState)

    const handleOrder = (index: number) => {
        const { timedOrders, currentSelectedOrder } = state;

        let updatedTimedOrders = [...timedOrders];

        if (currentSelectedOrder === index) {
            updatedTimedOrders[index] = { ...updatedTimedOrders[index], capacity: updatedTimedOrders[index].capacity + 1 };
            index = -1;
        } else {
            if (currentSelectedOrder !== -1) {
                updatedTimedOrders[currentSelectedOrder] = { ...updatedTimedOrders[currentSelectedOrder], capacity: updatedTimedOrders[currentSelectedOrder].capacity + 1 };
            }

            updatedTimedOrders[index] = { ...updatedTimedOrders[index], capacity: updatedTimedOrders[index].capacity - 1 };
        }

        setState("timedOrders", updatedTimedOrders);
        setState("currentSelectedOrder", index);
    }

    const handleSetCurrentDate = (currentDate: string) => {
        setState("currentDate", currentDate);
    }

    createEffect(async () => {
        // call API to fetch timed orders
        const timedOrders = await fetchTimedOrders();

        setState("timedOrders", timedOrders);
    })

    return <TimedOrderContext.Provider value={[state, { handleOrder, handleSetCurrentDate }]}>
        {props.children}
    </TimedOrderContext.Provider>
}

export const useTimedOrderContext = () => useContext(TimedOrderContext)