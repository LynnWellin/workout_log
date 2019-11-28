import { ADD_SESSION } from '../actionTypes';

const initialState = {
    sessions: [],
};

export default function(state = initialState, action) {
    console.log('Adding...', action);
    switch (action.type) {
        case ADD_SESSION: {
            console.log('Here', state);
            return {
                ...state,
                sessions: [...state.sessions, { id: action.payload.id, date: new Date() }],
            };
        }
        default:
            return state;
    }
}
