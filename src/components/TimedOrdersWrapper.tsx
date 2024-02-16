import { JSX } from 'solid-js';
import type { Component } from 'solid-js';

interface TimedOrdersWrapperProps {
    children: JSX.Element
}

const TimedOrdersWrapper: Component<TimedOrdersWrapperProps> = (props) => {
    return <div class='mt-4 grid grid-cols-3 gap-4'>{props.children}</div>
}

export default TimedOrdersWrapper;