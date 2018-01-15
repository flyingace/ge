import {
    RECEIVE_HEADER_DATA,
    FAILURE_HEADER_DATA,
    SELECT_NEW_TAB
} from '../actions/HeaderActions';
import { assign } from 'lodash';

const initialState = {
    logo: '',
    tabs: [],
    links: [],
    selected_tab: ''
};

export default function HeaderReducer(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_HEADER_DATA:
            state = assign({}, state, {
                logo: action.state.logo,
                tabs: action.state.tabs,
                links: action.state.links,
                selected_tab: action.state.selected_tab
            });
            break;
        case FAILURE_HEADER_DATA:
            break;
        case SELECT_NEW_TAB:
            state = assign({}, state, {
                selected_tab: action.state});
            break;
        default:
            return state;
    }

    return state;
}
