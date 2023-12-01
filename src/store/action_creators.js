import {SET_VALUE} from "./action_types"

export const setValueActionCreater = (value,indexArr) => {
    return {
        type: SET_VALUE,
        value,
        indexArr,
    }
}

