import {
    RECEIVE_HEADER_DATA,
    FAILURE_HEADER_DATA
} from '../actions/HeaderActions';
import { assign } from 'lodash';

const initialState = {
    logo: '',
    tabs: [],
    links: []
};

export default function HeaderReducer(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_HEADER_DATA:
            state = assign({}, state, {
                logo: action.state.logo,
                tabs: action.state.tabs,
                links: action.state.links
            });
            break;
        case FAILURE_HEADER_DATA:
            break;
        default:
            return state;
    }

    return state;
}
