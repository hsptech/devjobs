import React from 'react';
import './InputSwitch.scss';

const InputSwitch = (props) => {
    return (
        <>
            <input
                type="checkbox"
                hidden="hidden"
                id="inputSwitch"
                {...props}
            />
            <label class="switch" for="inputSwitch"></label>
        </>
    );
};

export default InputSwitch;
