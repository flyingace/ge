import React from 'react';
import PropTypes from 'prop-types';
import './Right.scss';

class Right extends React.Component {
    constructor() {
        super();
    }

    static propTypes = {};

    static defaultProps = {};

    state = {};

    render() {
        return (
            <section className='Right'>
                This is the Right component.
            </section>
        );
    }
}

export default Right;
