import { createStore } from 'redux'
import lectionReducers from './reducers/lection-reducers'

console.log('lectionReducers', lectionReducers);
const store = createStore(lectionReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;