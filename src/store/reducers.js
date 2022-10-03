import { combineReducers } from "redux"
import user from './user/reducer';
import invoice from './invoice/reducer';

const appReducer = combineReducers({
  user,
  invoice,
});

export default (state, action) => {
  return appReducer(state, action);
};
