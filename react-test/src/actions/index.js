import lights from '../constants/key-mirror'

export function changeyellow() {
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch({type: lights.CHANGE_YELLOW, isloading: false})
        }, 1000);
    }
}



export function changegreen() {
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch({type: lights.CHANGE_GREEN, isloading: false})
        }, 1000);
    }
}


export function changered() {
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch({type: lights.CHANGE_RED, isloading: false})
        }, 1000);
    }
}