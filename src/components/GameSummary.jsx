import React from 'react';
import {
    GameSummaryState
} from '../reducers/InitialStates';

export default function GameSummary({ state }) {
    const { GameSummary } = state;
    let stateClass = "GameSummary ";
    switch (GameSummary.State) {
        case GameSummaryState.HERO_WON:
            stateClass += "HeroWon"
            break;
        case GameSummaryState.MONSTER_WON:
            stateClass += "MonsterWon"
            break;
        default:
            break;
    }

    return (
        <div className={stateClass}>{GameSummary.Summary}</div>
    )
}