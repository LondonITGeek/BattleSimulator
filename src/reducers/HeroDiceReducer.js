import {
    GameControlActionTypes
} from '../actions/GameControlActions';
import {
    DiceComponentStates
} from './InitialStates';

export default function HeroDiceReducer(state, action) {
    switch (action.type) {
        case GameControlActionTypes.TRIGGER_ATTACK:
            state = {
                ...state,
                State: DiceComponentStates.ROLLING
            }
            break;
        case GameControlActionTypes.RESET_ROUND:
            state = {
                ...state,
                State: DiceComponentStates.INITIAL
            }
            break;
        case GameControlActionTypes.HERO_DICE_ROLL_FINISHED:
            state = {
                ...state,
                State: DiceComponentStates.FINISHED_ROLLING,
                DiceOneValue: action.payload.diceOneValue,
                DiceTwoValue: action.payload.diceTwoValue
            }
            break;

        default:
            break;
    }
    return state;
}