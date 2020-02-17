import React from 'react';
import Header from './Header';
import GameSummary from './GameSummary';
import Hero from './Hero';
import Monster from './Monster';
import AttackButton from './AttackButton';
import CombineReducer from '../reducers/CombineReducer';
import { InitialState } from '../reducers/InitialStates';
import GameSummaryReducer from '../reducers/GameSummaryReducer';
import HeroReducer from '../reducers/HeroReducer';
import MonsterReducer from '../reducers/MonsterReducer';
import HeroDiceReducer from '../reducers/HeroDiceReducer';
import MonsterDiceReducer from '../reducers/MonsterDiceReducer';
import HeroDice from './dice/HeroDice';
import MonsterDice from './dice/MonsterDice';
import ResolveRoundMiddlware from '../middleware/ResolveRoundMiddleware';
import ResolveGameMiddlware from '../middleware/ResolveGameMiddleware';
import useMiddleware from '../hooks/useMiddleware';

export default function Arena() {

    const rootReducer = CombineReducer({
        Header: (state, action) => state,
        GameSummary: GameSummaryReducer,
        Hero: HeroReducer,
        HeroDice: HeroDiceReducer,
        MonsterDice: MonsterDiceReducer,
        Monster: MonsterReducer
    })

    const middlewares = [ResolveRoundMiddlware, ResolveGameMiddlware];
    const [state, dispatch] = useMiddleware(rootReducer, InitialState, middlewares);
    console.log(state);
    return (
        <div className="Arena">
            <Header state={state.Header} />
            <GameSummary state={state} />
            <Hero state={state.Hero} dispatch={dispatch} />
            <HeroDice state={state.HeroDice} dispatch={dispatch} />
            <MonsterDice state={state.MonsterDice} dispatch={dispatch}/>
            <Monster state={state.Monster} dispatch={dispatch} />
            <AttackButton state={state} dispatch={dispatch} />
        </div>
    );
}