import React from 'react';

const ChildComponent = ({ text }) => {
    return (
        <div>
            <h2>Text from Parent: {text}</h2>
        </div>
    );
};

export default ChildComponent;
