import { ADD_SESSION } from './actionTypes';

let nextSessionId = 0;

export const addSession = content => {
    console.log('dispatching', content);
    return {
        type: ADD_SESSION,
        payload: {
            id: ++nextSessionId,
            content,
        },
    };
};
