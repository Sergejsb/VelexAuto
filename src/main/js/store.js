import { applyMiddleware, createStore } from 'redux';
import 'regenerator-runtime/runtime';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import mainReducer from './reducers';

const middleWare = composeWithDevTools(applyMiddleware(promise(), thunk));

export default createStore(mainReducer, middleWare);