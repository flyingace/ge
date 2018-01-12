import React from 'react';
import PropTypes from 'prop-types';
import './SearchField.scss';

class SearchField extends React.Component {
    constructor() {
        super();
    }

    static propTypes = {};

    static defaultProps = {};

    state = {};

    render() {
        return (
            <div className='SearchField'>
                This is the SearchField component.
            </div>
        );
    }
}

export default SearchField;
