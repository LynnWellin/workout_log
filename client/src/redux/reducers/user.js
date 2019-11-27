import { SET_USER, CLEAR_USER } from '../actionTypes';

const initialState = {
    user: null,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_USER: {
            return { first: 'Yury', last: 'Lebedev' };
        }
        case CLEAR_USER: {
            return null;
        }
        default:
            return state;
    }
}
