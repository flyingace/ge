import React from 'react';
import PropTypes from 'prop-types';
import './NavBarTabSet.scss';
import {forEach} from 'lodash';
import {NavBarTab} from "../NavBarComponents/NavBarComponents";

class NavBarTabSet extends React.Component {
    constructor() {
        super();
    }

    static propTypes = {
        'selectedTab': PropTypes.string,
        'selectTab': PropTypes.func,
        'tabs': PropTypes.array
    };

    static defaultProps = {};

    state = {};

    renderTabs = (tabLabels) => {
        return tabLabels.map((tabLabel) => {
            const tabSelected = (tabLabel === this.props.selectedTab) ? 'selected' : '';
            return <NavBarTab label={tabLabel} isSelected={tabSelected} selectTab={this.props.selectTab} key={tabLabel}/>;
        });
    };

    render() {
        return (
            <div className='NavBarTabSet'>
                {this.renderTabs(this.props.tabs)}
            </div>
        );
    }
}

export default NavBarTabSet;
