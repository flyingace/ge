import React from 'react';
import PropTypes from 'prop-types';
import './NavBarTabSet.scss';

class NavBarTabSet extends React.Component {
    constructor() {
        super();
    }

    static propTypes = {
        'selected': PropTypes.string,
        'tabs': PropTypes.array
    };

    static defaultProps = {};

    state = {};

    renderTabs = () => {
        console.log(this.props.tabs);
        return <div>Hi</div>;
    };

    render() {
        return (
            <div className='NavBarTabSet'>
                {this.renderTabs()}
            </div>
        );
    }
}

export default NavBarTabSet;
