import React, { useState } from 'react';
import useInterval from '../hooks/useInterval';
import { CharacterStates } from '../reducers/InitialStates';
import MonsterImage from '../images/Monster.png'

const MonsterState = {
    STILL: "still",
    BREATHING: "breathing",
    ATTACKING: "attacking"
}

export default function Monster({ state: Monster }) {
    const { State } = Monster;
    const [currentStance, setCurrentStance] = useState(MonsterState.STILL);

    useInterval(() => {
        if (currentStance === MonsterState.STILL && State !== CharacterStates.DEAD) {
            setCurrentStance(MonsterState.BREATHING);
        } else {
            setCurrentStance(MonsterState.STILL);
        }

    }, 600);

    let stateClass = "Monster ";
    stateClass = currentStance === MonsterState.BREATHING ? stateClass + " MonsterBreathing " : stateClass;
    switch (State) {
        case CharacterStates.ATTACKING:
            stateClass += "MonsterAttacking"
            break;
        case CharacterStates.DEFENDING:
            stateClass += "MonsterDefending"
            break;
        case CharacterStates.DEAD:
            stateClass += "Dead"
            break;
        case CharacterStates.INITIAL:
            stateClass += ""
            break;
        default:
            break;
    }

    return (
        <div className="MonsterZone">
            <img className={stateClass} src={MonsterImage} alt="Scary Monster" />
            <progress max={Monster.MaxHealth} value={Monster.Health}></progress>
            <div className="Centered">{Monster.Health}</div>
            <div className="Centered">{Monster.Name}</div>
        </div>
    )
}