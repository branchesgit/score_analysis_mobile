import * as ActionTypes from './MenuActionTypes'

function changeMenu(  menuState ) {
    return {
        type: ActionTypes.CHANGE_MENU_PATH,
        mergeState:  menuState
    }
}


var actions = {
    changeMenu,
};

export default actions