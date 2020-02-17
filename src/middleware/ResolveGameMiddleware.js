import {
    playerWonGameAction,
    monsterWonGameAction
} from '../actions/GameControlActions';

import {
    GameSummaryState
} from '../reducers/InitialStates';

export default function ResolveGameMiddlware(store, dispatch) {
    const heroState = store.Hero;
    const monsterState = store.Monster;
    const gameState = store.GameSummary.State;

    if (gameState === GameSummaryState.HERO_WON || gameState === GameSummaryState.MONSTER_WON) {
        return;
    }

    if (heroState.Health <= 0 ) {
        dispatch(monsterWonGameAction());
    } else if (monsterState.Health <= 0) {
        dispatch(playerWonGameAction());
    }
}