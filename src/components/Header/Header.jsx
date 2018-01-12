import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import TopNavBar from "../TopNavBar/TopNavBar";
import HeaderBottom from '../HeaderBottom/HeaderBottom';

class Header extends React.Component {
    constructor() {
        super();
    }

    static propTypes = {
        fetchHeaderData: PropTypes.func
    };

    static defaultProps = {};

    state = {};

    componentWillMount() {
        this.props.fetchHeaderData();
    }

    render() {
        return (
            <header className='Header'>
                <TopNavBar { ...this.props} />
                <HeaderBottom/>
            </header>
        );
    }
}

export default Header;
