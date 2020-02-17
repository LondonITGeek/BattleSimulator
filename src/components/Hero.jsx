import React, { useState } from 'react';
import useInterval from '../hooks/useInterval';
import { CharacterStates } from '../reducers/InitialStates';
import HeroImage from '../images/Player.png'

const HeroState = {
    STILL: "still",
    BREATHING: "breathing",
    ATTACKING: "attacking"
}

export default function Hero({ state: Hero }) {
    const { State } = Hero;
    const [currentStance, setCurrentStance] = useState(HeroState.STILL);

    useInterval(() => {
        if (currentStance === HeroState.STILL && State !== CharacterStates.DEAD) {
            setCurrentStance(HeroState.BREATHING);
        } else {
            setCurrentStance(HeroState.STILL);
        }

    }, 800);

    let stateClass = "Hero ";
    stateClass = currentStance === HeroState.BREATHING ? stateClass + " Breathing " : stateClass;
    switch (State) {
        case CharacterStates.ATTACKING:
            stateClass += "HeroAttacking"
            break;
        case CharacterStates.DEFENDING:
            stateClass += "HeroDefending"
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
        <div className="HeroZone">
            <img className={stateClass} src={HeroImage} alt="Heroic Knight" />
            <progress max={Hero.MaxHealth} value={Hero.Health}></progress>
            <div className="Centered">{Hero.Health}</div>
            <div className="Centered">{Hero.Name}</div>
        </div>
    )
}