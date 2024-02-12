import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';
import { useTimedOrderContext } from './context';
import TimeCard from './components/TimeCard';

const App: Component = () => {
  const [timedOrders] = useTimedOrderContext()
  const [currentDate, setCurrentDate] = createSignal("TODAY")

  const handleSetCurrentDate = (currentDate: string) => {
    setCurrentDate(currentDate)
  }

  return (
    <div class='max-w-lg mx-auto mt-40'>
      <div class='flex items-center space-x-4 justify-between'>
        <button class='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>Prev</button>
        <button class={`text-white font-bold py-2 px-4 rounded ${currentDate() === 'TODAY' ? 'bg-yellow-500 hover:bg-yellow-700' : 'bg-gray-500 hover:bg-gray-700'}`} onClick={() => handleSetCurrentDate('TODAY')}>Dnes 4.4</button>
        <button class={`text-white font-bold py-2 px-4 rounded ${currentDate() === 'TOMORROW' ? 'bg-yellow-500 hover:bg-yellow-700' : 'bg-gray-500 hover:bg-gray-700'}`} onClick={() => handleSetCurrentDate('TOMORROW')}>Zitra 5.4</button>
        <button class='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>Next</button>
      </div>

      <div class='mt-4 grid grid-cols-3 gap-4'>
        {timedOrders.map((order, index) => <TimeCard index={index} order={order} />)}
      </div>
    </div>
  );
};

export default App;
