import * as Redux from 'redux'
import LIGHT from '../constants/key-mirror'
const initState = {
    color: 'red',
    isLoading: false
}


function light(state=initState, action) {
    switch(action.type) {
        case LIGHT.CHANGE_GREEN:
            return {
                color: 'green',
                isLoading: false
            }
        case LIGHT.CHANGE_YELLOW:
            return {
                color: 'yellow',
                isLoading: action.isLoading,
                text: action.text
            }
        case LIGHT.CHANGE_RED:
            return Object.assign({}, initState)
            
        default:
            return state
    }
}

const rootReducer = Redux.combineReducers({
    light
})

export default rootReducer