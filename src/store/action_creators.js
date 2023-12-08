import {LOSE, SET_VALUE, WIN} from "./action_types"

export const setValueActionCreater = (value,indexArr) => {
    return {
        type: SET_VALUE,
        value,
        indexArr,
    }
}

export const loseActionCreater = () => {
    return {
        type: LOSE
    }
}

export const winActionCreater = () => {
    return {
        type: WIN
    }
}