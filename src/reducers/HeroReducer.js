import {
    GameControlActionTypes
} from '../actions/GameControlActions';
import {
    CharacterStates
} from './InitialStates';


export default function HeroReducer(state, action) {
    switch (action.type) {
        case GameControlActionTypes.TRIGGER_ATTACK:
            state = {
                ...state,
                State: CharacterStates.INITIAL
            }
            break;
        case GameControlActionTypes.MONSTER_WON_ROUND:
            const remainingHealth = state.Health - (action.payload);
            const mortalState = remainingHealth > 0 ? CharacterStates.DEFENDING : CharacterStates.DEAD
            state = {
                ...state,
                Health: remainingHealth,
                State: mortalState
            }
            break;
        case GameControlActionTypes.PLAYER_WON_ROUND:
            state = {
                ...state,
                State: CharacterStates.ATTACKING
            }
            break;

        default:
            break;
    }
    return state;
}