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
        links: PropTypes.array,
        selected_tab: PropTypes.string,
        selectTab: PropTypes.func
    };

    static defaultProps = {};

    state = {};

    render() {
        const {logo, tabs, links, selected_tab, selectTab} = this.props;
        return (
            <div className='TopNavBar'>
                <BrandIcon source={logo}/>
                <NavBarTabSet tabs={tabs} selectedTab={selected_tab} selectTab={selectTab}/>
                <SearchField/>
                <NavBarLinkSet links={links}/>
            </div>
        );
    }
}

export default TopNavBar;
