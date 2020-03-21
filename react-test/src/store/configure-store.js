import rootReducer from '../reducers/index'
import * as Redux from 'redux'
import thunkMiddleware from 'redux-thunk'

export default function (initState) {
    return Redux.createStore(rootReducer, initState, Redux.applyMiddleware(thunkMiddleware))
}