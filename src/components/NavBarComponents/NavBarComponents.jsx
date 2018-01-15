import React from 'react';
import './NavBarComponents.scss';

export const BrandIcon = (props) => {

    return (
        <div className='brandIcon'>
            <img src={props.source}/>
        </div>
    )
};

export const NavBarTab = (props) => {

    return (
        <div className={'navBarTab ' + props.isSelected} id={props.label} onClick={props.selectTab}>
            {props.label}
        </div>
    )
};

export const NavBarLink = (props) => {

    return (
        <span className='navBarLink'>{props.label}</span>
    )
};
