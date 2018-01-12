import React from 'react';
import PropTypes from 'prop-types';
import './NavBarLinkSet.scss';

class NavBarLinkSet extends React.Component {
    constructor() {
        super();
    }

    static propTypes = {};

    static defaultProps = {};

    state = {};

    render() {
        return (
            <div className='NavBarLinkSet'>
                This is the NavBarLinkSet component.
            </div>
        );
    }
}

export default NavBarLinkSet;
