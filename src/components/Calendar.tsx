import type { Component } from 'solid-js';
import { useTimedOrderContext } from '../context';

const Calendar: Component = () => {
    const [state, { handleSetCurrentDate }] = useTimedOrderContext();

    return (
        <div class='flex items-center space-x-4 justify-between'>
            <button class='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>Prev</button>
            <button class={`text-white font-bold py-2 px-4 rounded ${state.currentDate === 'TODAY' ? 'bg-yellow-500 hover:bg-yellow-700' : 'bg-gray-500 hover:bg-gray-700'}`} onClick={() => handleSetCurrentDate('TODAY')}>Dnes 4.4</button>
            <button class={`text-white font-bold py-2 px-4 rounded ${state.currentDate === 'TOMORROW' ? 'bg-yellow-500 hover:bg-yellow-700' : 'bg-gray-500 hover:bg-gray-700'}`} onClick={() => handleSetCurrentDate('TOMORROW')}>Zitra 5.4</button>
            <button class='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>Next</button>
        </div>
    )
}

export default Calendar;