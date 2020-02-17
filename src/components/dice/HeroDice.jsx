import React, { useEffect } from 'react';
import Die from "./Die";
import {
    DiceComponentStates
} from '../../reducers/InitialStates';
import { heroDiceRollFinishedAction } from '../../actions/GameControlActions';

export default function HeroDice({ state, dispatch }) {
    const currentState = state.State;
    const diceOneValue = state.DiceOneValue;
    const diceTwoValue = state.DiceTwoValue;

    let getDiceRoll = () => {
        return Math.floor(Math.random() * Math.floor(6)) + 1;
    }

    useEffect(() => {
        if (currentState === DiceComponentStates.ROLLING) {
            setTimeout(() => {
                dispatch(heroDiceRollFinishedAction(getDiceRoll(), getDiceRoll()));
            }, 1000);
        }
    }, [currentState, dispatch]);
    
    if (currentState === DiceComponentStates.ROLLING) {
        return (
            <div className="HeroDice">
                <Die value='?' />
                <Die value='?' />
            </div>
        )
    }

    return (
        <div className="HeroDice">
            <Die value={diceOneValue} />
            <Die value={diceTwoValue} />
        </div>
    )
}