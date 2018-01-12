import React from 'react';
import './NavBarComponents.scss';

export const BrandIcon = (props) => {

    return (
        <img className='brandIcon' src={props.source}/>
    )
};

export const NavBarTab = (props) => {

    return (
        <div className='navBarTab' id={props.label}>
            {props.label}
        </div>
    )
};

export const NavBarLink = (props) => {

    return (
        <span className='navBarLink'>{props.label}</span>
    )
};
