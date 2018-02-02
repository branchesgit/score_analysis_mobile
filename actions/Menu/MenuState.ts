import * as Immutable from 'immutable'
import * as ActionTypes from './MenuActionTypes'

const initialState = Immutable.Map({
    appInit:false
});

export default function menuState( state = initialState, action ) {
    switch(action.type){
        case ActionTypes.CHANGE_MENU_PATH:
            return state.merge(action.mergeState);
    }
    return state;
}