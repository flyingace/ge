import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HeaderActions from '../actions/HeaderActions';
import Header from '../components/Header/Header';

function mapStateToProps(state) {
    return {
        logo: state.headerReducer.logo,
        tabs: state.headerReducer.tabs,
        links: state.headerReducer.links
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(HeaderActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
