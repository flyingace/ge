import React from 'react';
import PropTypes from 'prop-types';
import './TopNavBar.scss';
import {BrandIcon} from "../NavBarComponents/NavBarComponents";
import NavBarTabSet from "../NavBarTabSet/NavBarTabSet";
import SearchField from "../SearchField/SearchField";
import NavBarLinkSet from "../NavBarLinkSet/NavBarLinkSet";
import logo from '../../assets/ge_logo.jpg';

class TopNavBar extends React.Component {
    constructor() {
        super();
    }

    static propTypes = {
        logo: PropTypes.string,
        tabs: PropTypes.array,
        links: PropTypes.array
    };

    static defaultProps = {};

    state = {};

    render() {
        const {tabs, links} = this.props;
        return (
            <div className='TopNavBar'>
                <BrandIcon source={this.props.logo}/>
                <NavBarTabSet tabs={tabs}/>
                <SearchField />
                <NavBarLinkSet links={links}/>
            </div>
        );
    }
}

export default TopNavBar;
