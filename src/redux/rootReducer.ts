import {combineReducers} from 'redux';
import Htodo from '../page/hook-page/todo-list/reducer';
export const rootReducer = combineReducers({Htodo});
export type typeRootReducer = ReturnType<typeof rootReducer>
