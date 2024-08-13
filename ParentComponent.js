import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const [counter, setCounter] = useState(0);
    const [text, setText] = useState("");

    const incrementCounter = () => setCounter(counter + 1);

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={incrementCounter}>Increment</button>
            <ChildComponent text={text} />
        </div>
    );
};

export default ParentComponent;
