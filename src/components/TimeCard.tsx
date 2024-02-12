import type { Component } from 'solid-js';
import { TimedOrder } from '../types';
import { useTimedOrderContext } from '../context';

interface ITimeCard {
    index: number;
    order: TimedOrder
}

const TimeCard: Component<ITimeCard> = (props) => {
    const { index, order } = props;

    const [, { handleOrder }] = useTimedOrderContext()

    return <div class={`flex justify-center items-center py-4 border rounded-xl cursor-pointer relative ${order.booked ? 'bg-green-500' : ''}`} onClick={() => handleOrder(index)}>
        <span class='absolute top-1 left-1 text-xs'>
            ({order.originialCapacity - order.capacity} / {order.originialCapacity})
        </span>
        {order.time}
    </div>
}

export default TimeCard