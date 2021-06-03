import React from 'react';
import './InputField.scss';
var classNames = require('classnames');

function InputField(props) {
    const { component, outerClassName, ...restProps } = props;
    const outerClass = classNames(
        'input-field-wrapper',
        outerClassName,
    );
    return (
        <div className={outerClass}>
            <span className="icon">{component}</span>
            <input {...restProps} />
        </div>
    );
}

export default InputField;
