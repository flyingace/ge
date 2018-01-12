import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

class Button extends React.Component {
    constructor() {
        super();
    }

    static propTypes = {
        buttonId: PropTypes.string,
        className: PropTypes.string,
        label: PropTypes.string,
        handler: PropTypes.func.isRequired
    };

    static defaultProps = {
        buttonId: '',
        className: 'Button',
        label: 'Button',
        handler: (evt) => { console.log(`${evt.target} has no handler prop`)}
    };

    state = {
        enabled: true
    };

    onButtonClick = (evt) => {
        if (this.state.enabled) {
            this.props.handler(evt);
        }
        console.log('Button clicked');
    };

    render() {
        return (
            <div className={this.props.className} id={this.props.buttonId} onClick={this.onButtonClick}>
                {this.props.label}
            </div>
        );
    }
}

export default Button;
