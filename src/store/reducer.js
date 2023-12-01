import {SET_VALUE} from "./action_types"

const data = {
    level: 0,
    matrix: [
        [
            [
                [1, 2, 3, 5, 4, 6],
                [6, 5, 4, 3, 1, 2],
                [2, 6, 1, 4, 5, 3],
                [4, 3, 5, 6, 2, 1],
                [3, 4, 2, 1, 6, 5],
                [5, 1, 6, 2, 3, 4]
            ],
            [
                [0, 2, 3, 0, 4, 6],
                [0, 5, 4, 3, 1, 2],
                [2, 6, 1, 0, 0, 0],
                [0, 3, 0, 0, 0, 0],
                [0, 0, 2, 0, 0, 0],
                [5, 0, 0, 0, 0, 4]
            ]
        ],
        [
            [
                [4, 6, 3, 1, 2, 5],
                [1, 2, 5, 3, 4, 6],
                [5, 1, 6, 4, 3, 2],
                [2, 3, 4, 5, 6, 1],
                [6, 4, 1, 2, 5, 3],
                [3, 5, 2, 6, 1, 4]
            ],
            [
                [0, 0, 0, 1, 2, 0],
                [1, 2, 5, 0, 4, 0],
                [0, 0, 0, 4, 3, 2],
                [0, 0, 4, 0, 0, 0],
                [0, 4, 1, 2, 5, 3],
                [3, 0, 0, 0, 0, 0]
            ]
        ],
        [
            [
                [2, 1, 5, 3, 4, 6],
                [6, 4, 3, 1, 2, 5],
                [1, 3, 2, 5, 6, 4],
                [5, 6, 4, 2, 1, 3],
                [4, 5, 1, 6, 3, 2],
                [3, 2, 6, 4, 5, 1]
            ],
            [
                [2, 0, 5, 3, 4, 0],
                [0, 4, 3, 0, 0, 0],
                [0, 3, 0, 0, 6, 0],
                [5, 6, 0, 2, 0, 0],
                [4, 5, 1, 0, 0, 0],
                [0, 2, 0, 0, 0, 1]
            ]
        ],
    ]
}

const initialState = {
    errors: 0,
    values: [1, 2, 3, 4, 5, 6],
    matrix: {
        // deep cloning of the array
        start: JSON.parse(JSON.stringify(data.matrix[data.level][1])),
        end: data.matrix[data.level][0]
    }
}


const reducer = (state = initialState, action = {type: ""}) => {
    switch (action.type) {
        case SET_VALUE:
            const newState =  {
                ...state, 
                matrix: {
                    ...state.matrix,
                    start: [...state.matrix.start]
                }
            }
            if (state.matrix.end[action.indexArr[0]][action.indexArr[1]] === +action.value){
                newState.matrix.start[action.indexArr[0]][action.indexArr[1]] = +action.value
            }
            return newState
    }
    return state
}


export default reducer 