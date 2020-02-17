export const GameControlActionTypes = {
    TRIGGER_ATTACK: "TriggerAttack",
    HERO_DICE_ROLL_FINISHED: "HeroDiceRollFinished",
    MONSTER_DICE_ROLL_FINISHED: "MonsterDiceRollFinished",
    RESET_ROUND: "ResetRound",
    PLAYER_WON_ROUND: "PlayerWonRound",
    MONSTER_WON_ROUND: "MonsterWonRound",
    ROUND_WAS_A_DRAW: "RoundWasADraw",
    PLAYER_WON_GAME: "PlayerWonGame",
    MONSTER_WON_GAME: "MonstWonGame"
}

export const triggerAttackAction = () => {
    return {
        type: GameControlActionTypes.TRIGGER_ATTACK,
        payload: ""
    }
}

export const heroDiceRollFinishedAction = (diceOneValue, diceTwoValue) => {
    return {
        type: GameControlActionTypes.HERO_DICE_ROLL_FINISHED,
        payload: {
            diceOneValue: diceOneValue,
            diceTwoValue: diceTwoValue
        }
    }
}

export const monsterDiceRollFinishedAction = (diceOneValue, diceTwoValue) => {
    return {
        type: GameControlActionTypes.MONSTER_DICE_ROLL_FINISHED,
        payload: {
            diceOneValue: diceOneValue,
            diceTwoValue: diceTwoValue
        }
    }
}

export const resetRoundAction = () => {
    return {
        type: GameControlActionTypes.RESET_ROUND,
        payload: ""
    }
}

export const playerWonRoundAction = (damageToMonster) => {
    return {
        type: GameControlActionTypes.PLAYER_WON_ROUND,
        payload: damageToMonster
    }
}

export const monsterWonRoundAction = (damageToPlayer) => {
    return {
        type: GameControlActionTypes.MONSTER_WON_ROUND,
        payload: damageToPlayer
    }
}

export const roundWasADrawAction = () => {
    return {
        type: GameControlActionTypes.ROUND_WAS_A_DRAW,
        payload: ""
    }
}

export const playerWonGameAction = () => {
    return {
        type: GameControlActionTypes.PLAYER_WON_GAME,
        payload: ""
    }
}

export const monsterWonGameAction = () => {
    return {
        type: GameControlActionTypes.MONSTER_WON_GAME,
        payload: ""
    }
}