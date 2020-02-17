import {
    DiceComponentStates
} from '../reducers/InitialStates';
import {
    resetRoundAction,
    playerWonRoundAction,
    monsterWonRoundAction,
    roundWasADrawAction
} from '../actions/GameControlActions';

export default function ResolveRoundMiddlware(store, dispatch) {
    const heroDiceRollState = store.HeroDice;
    const monsterDiceRollState = store.MonsterDice;
    if (heroDiceRollState.State === DiceComponentStates.FINISHED_ROLLING && monsterDiceRollState.State === DiceComponentStates.FINISHED_ROLLING) {
        const heroTotal = heroDiceRollState.DiceOneValue + heroDiceRollState.DiceTwoValue;
        const monsterTotal = monsterDiceRollState.DiceOneValue + monsterDiceRollState.DiceTwoValue;
        // fire action to resolve round
        dispatch(resetRoundAction());
        if ( heroTotal > monsterTotal) {
            dispatch(playerWonRoundAction(heroTotal - monsterTotal));
        } else if ( monsterTotal > heroTotal){
            dispatch(monsterWonRoundAction(monsterTotal - heroTotal));
        } else if (heroTotal === monsterTotal) {
            dispatch(roundWasADrawAction());
        }
        
    }
}