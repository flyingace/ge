import React from 'react';
import PropTypes from 'prop-types';
import './Main.scss';

class Main extends React.Component {
    constructor() {
        super();
    }

    static propTypes = {};

    static defaultProps = {};

    state = {};

    render() {
        return (
            <main className='Main'>
                This is the Main component.
            </main>
        );
    }
}

export default Main;
