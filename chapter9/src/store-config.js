import { createStore, applyMiddleware } from 'redux'
import lectionReducers from './reducers/lection-reducers'
import thunk from 'redux-thunk';

const store = createStore(lectionReducers, applyMiddleware(thunk));

export default store;