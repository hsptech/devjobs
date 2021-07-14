import React, { useState, useEffect } from 'react';
import './Header.scss';
import InputSwitch from '../InputSwitch';

const Header = () => {
    const [theme, setTheme] = useState(0);
    const onThemeChange = (e) => {
        const value = e.target.checked;
        setTheme(value ? 1 : 0);
    };
    return (
        <div className="header-wrapper">
            <div className="header-items">
                <div>devjobs</div>
                <div>
                    <InputSwitch
                        onChange={onThemeChange}
                        checked={theme ? true : false}
                    />
                </div>
            </div>
            <div className="header-curve"></div>
        </div>
    );
};

export default Header;
