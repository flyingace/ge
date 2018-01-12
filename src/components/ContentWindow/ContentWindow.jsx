import React from 'react';
import PropTypes from 'prop-types';
import './ContentWindow.scss';

class ContentWindow extends React.Component {
    constructor() {
        super();
    }

    static propTypes = {
        children: PropTypes.node.isRequired
    };

    static defaultProps = {};

    state = {};

    render() {
        return (
            <div className='ContentWindow'>
                {this.props.children}
            </div>
        );
    }
}

export default ContentWindow;
