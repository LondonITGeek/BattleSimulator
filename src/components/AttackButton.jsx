import React from 'react';
import { triggerAttackAction } from '../actions/GameControlActions';
import { GameSummaryState } from '../reducers/InitialStates';

export default function AttackButton({ state, dispatch }) {
    const gameSummaryState = state.GameSummary.State;
    const disableAttackButton = gameSummaryState === GameSummaryState.MONSTER_WON || gameSummaryState === GameSummaryState.HERO_WON;

    return (
        <button onClick={() => dispatch(triggerAttackAction())}
            className="GameControls"
            disabled={disableAttackButton}>Attack!</button>
    )
}