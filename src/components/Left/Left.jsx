import React from 'react';
import PropTypes from 'prop-types';
import './Left.scss';

class Left extends React.Component {
    constructor() {
        super();
    }

    static propTypes = {};

    static defaultProps = {};

    state = {};

    render() {
        return (
            <section className='Left'>
                This is the Left component.
            </section>
        );
    }
}

export default Left;
