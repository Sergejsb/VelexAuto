import { applyMiddleware, createStore } from 'redux';
import 'regenerator-runtime/runtime';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import mainReducer from './reducers';
import { setAuthToken } from './actions/index';
import { setUser } from './actions/authActions';


const middleWare = composeWithDevTools(applyMiddleware(promise(), thunk));

export const store = createStore(mainReducer, middleWare);

if (localStorage.jwt) {
    setAuthToken(localStorage.jwt);
    store.dispatch(setUser(localStorage.jwt));
}