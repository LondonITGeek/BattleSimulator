export const CharacterStates = {
    INITIAL: "Initial",
    DEFENDING: "Defending",
    ATTACKING: "Attacking",
    DEAD: "Dead",
    TRIUMPHANT: "Triumphant"
}

const InitialHeroState = {
    Health: 20,
    MaxHealth: 20,
    Name: "Robert",
    State: CharacterStates.INITIAL
}

const InitialMonsterState = {
    Health: 20,
    MaxHealth: 20,
    Name: "Nibbler destroyer of worlds",
    State: CharacterStates.INITIAL
}

export const DiceComponentStates = {
    INITIAL: "Initial",
    ROLLING: "Rolling",
    FINISHED_ROLLING: "Finished Rolling"
}

const InitialDiceState = {
    State: DiceComponentStates.INITIAL,
    DiceOneValue: 1,
    DiceTwoValue: 1
}

export const GameSummaryState = {
    INITIAL: "Initial",
    HERO_WON: "Hero Won",
    MONSTER_WON: "Monster Won"
}

const InitialGameSummaryState = {
    State: GameSummaryState.INITIAL,
    Summary: "Click attack button to start the fight!!"
}

export const InitialState = {
    Hero: InitialHeroState,
    HeroDice: InitialDiceState,
    MonsterDice: InitialDiceState,
    Monster: InitialMonsterState,
    Header: "Battle Simulator",
    GameSummary: InitialGameSummaryState
}