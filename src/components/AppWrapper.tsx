import { JSX } from 'solid-js';
import type { Component } from 'solid-js';

interface AppWrapperProps {
    children: JSX.Element
}

const AppWrapper: Component<AppWrapperProps> = (props) => {
    return <div class='max-w-lg mx-auto mt-40'>{props.children}</div>
}

export default AppWrapper;