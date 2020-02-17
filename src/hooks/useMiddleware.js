import {
    useReducer, useEffect
} from 'react';

export default function useMiddleware(reducer, initialState, middlewares = []) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        middlewares.forEach(middleware => {
            middleware(state, dispatch)
        });
    }, [state, middlewares])

    return [state, dispatch];
}