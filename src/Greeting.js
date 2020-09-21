import React from 'react';

// const Greeting = (props) => {
const Greeting = ({name}) => {


    const o = {
        name: 'Tom'
        , shoeSize: 9.5
    };

    // Another object destructuring, like props...
    const {shoeSize} = o;

    // Array destructuring...
    //const [, shoeSize,] = [1, 9.528, 10];

    return (
        <>
        <h1>
            {/* Hello {props.name} ! ! ! */}
            Hello {name ? name : "<please supply a name attr>"} ! ! !
        </h1>
        <h3>{shoeSize}</h3>
        </>
    );
}

export default Greeting;