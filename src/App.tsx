import type { Component } from 'solid-js';
import { For } from 'solid-js';
import { useTimedOrderContext } from './context';
import AppWrapper from './components/AppWrapper';
import TimeCard from './components/TimeCard';
import TimedOrdersWrapper from './components/TimedOrdersWrapper';
import Calendar from './components/Calendar';

const App: Component = () => {
  const [state] = useTimedOrderContext()

  return (
    <AppWrapper>
      <Calendar />

      <TimedOrdersWrapper>
        <For each={state.timedOrders}>
          {(order, index) => <TimeCard index={index()} order={order} />}
        </For>
      </TimedOrdersWrapper>
    </AppWrapper>
  );
};

export default App;
