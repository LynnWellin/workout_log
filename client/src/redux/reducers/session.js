import { ADD_SESSION } from '../actionTypes';

const initialState = {
    sessions: [],
};

export default function(state = initialState, action) {
    console.log('Adding...', action);
    switch (action.type) {
        case ADD_SESSION: {
            console.log('Here');
            return { ...state, sessions: [...state.sessions, { date: new Date() }] };
        }
        default:
            return state;
    }
}
