import App from './container/index.js'
import ReactDOM from 'react-dom'
import React from 'react'
import {Provider} from 'react-redux'
import configureStore from './store/configure-store'
import './assets/index.css'
const store = configureStore()

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
    , document.getElementById('app'))
