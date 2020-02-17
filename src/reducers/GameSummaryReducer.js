import {
    GameControlActionTypes
} from '../actions/GameControlActions';
import {
    GameSummaryState
} from '../reducers/InitialStates';

export default function GameSummaryReducer(state, action) {
    switch (action.type) {
        case GameControlActionTypes.PLAYER_WON_ROUND:
            state = {
                ...state,
                Summary: `You hit for ${action.payload} damage! Many fold in the presence of chaos, not you, not today!`
            }
            break;
        case GameControlActionTypes.MONSTER_WON_ROUND:
            state = {
                ...state,
                Summary: `You were struck for ${action.payload} damage! Hold fast, or expire!`
            }
            break;
        case GameControlActionTypes.ROUND_WAS_A_DRAW:
            state = {
                ...state,
                Summary: "The fates hold in the balance. For now..."
            }
            break;
        case GameControlActionTypes.PLAYER_WON_GAME:
            state = {
                ...state,
                Summary: "You won! Courage surges, as the enemies crumble!",
                State: GameSummaryState.HERO_WON
            }
            break;
        case GameControlActionTypes.MONSTER_WON_GAME:
            state = {
                ...state,
                Summary: "Game Over. And now... darkness holds dominion... black as death...",
                State: GameSummaryState.MONSTER_WON
            }
            break;

        default:
            break;
    }

    return state;
}