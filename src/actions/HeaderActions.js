import headerData from '../components/Header/tests/header.json';

export const RECEIVE_HEADER_DATA = 'RECEIVE_HEADER_DATA';
export const FAILURE_HEADER_DATA = 'FAILURE_HEADER_DATA';
export const SELECT_NEW_TAB = 'SELECT_NEW_TAB';

export function requestHeaderData(dispatch) {
    return (dispatch) => {
        dispatch(receiveHeaderData(headerData));
    }
}

export function fetchHeaderData() {
    return (dispatch) => {
        fetch('/src/components/Header/tests/header.json')
            .then(response =>
                response.json().then(data => ({
                    data: data,
                    status: response.status
                }))
            )
            .then(response => {
                if (response.status === 200) {
                    dispatch(receiveHeaderData(response.data))
                } else {
                    dispatch(failureHeaderData);
                }
            });
    };
}

export function receiveHeaderData(data) {
    return {type: RECEIVE_HEADER_DATA, state: data};
}

export function failureHeaderData() {
    console.error("dere's a problem with your header data");
    return {type: FAILURE_HEADER_DATA};
}

export function selectTab(evt) {
    const selectedTabId = evt.target.id;
    return {type: SELECT_NEW_TAB, state: selectedTabId};
}
