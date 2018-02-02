import { createStore } from 'redux'
import rootReducer from '../../reducers/index'

export function initStore( initStore ) {
    return createStore( rootReducer, initStore );
}