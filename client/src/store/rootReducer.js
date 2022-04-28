import { combineReducers } from 'redux'
import csrfReducer from './CsrfToken/csrfReducer';

const rootReducer = combineReducers({
  csrf: csrfReducer,
});

export default rootReducer;
