import React from 'react';
import PropTypes from 'prop-types';
import './HeaderBottom.scss';

class HeaderBottom extends React.Component {
    constructor() {
        super();
    }

    static propTypes = {};

    static defaultProps = {};

    state = {};

    render() {
        return (
            <div className='HeaderBottom'>
                This is the HeaderBottom component.
            </div>
        );
    }
}

export default HeaderBottom;
