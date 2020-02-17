export default function CombineReducer(reducers) {
    return (state = {}, action) => {
        let newState = {};
        Object.entries(reducers).forEach(([key, reducer]) => {
            newState[key] = reducer(state[key], action);
        });

        return newState;
    };
}