const INITIAL_STATE = {
    data: [],
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'Update': 
        state.data.push(action.data)
        return {
            data:state.data
        }
        default:{
            return state
        }
    }
}

export default reducer