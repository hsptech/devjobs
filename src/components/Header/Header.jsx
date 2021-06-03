import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="header-items">
                <div>devjobs</div>
                <div>filter comp</div>
            </div>
            <div className="header-curve"></div>
        </div>
    );
};

export default Header;
