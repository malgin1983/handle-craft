import {  createStore, applyMiddleware, compose } from 'redux'
import  { reducer}  from './MainReducer'
import createSagaMiddleware from 'redux-saga'


const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware];

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( reducer, composeEnhancers(applyMiddleware(...middlewares)));
export default store;
