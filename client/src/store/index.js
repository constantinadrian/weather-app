import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './rootReducer';

const middleware = [
    thunkMiddleware,
];

const composedEnhancer = composeWithDevTools(applyMiddleware(...middleware))

// The store now has the ability to accept thunk functions in `dispatch`
const store = createStore(rootReducer, composedEnhancer)

export default store
