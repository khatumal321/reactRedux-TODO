const INITIAL_STATE = {
    data: [],
}

const reducer = (state = INITIAL_STATE, action) => {
    console.log(action)
    switch (action.type) {
        case 'add':
            state.data.push(action.data)
            return {
                ...state,
                data: state.data.concat()
            }
        case 'Delete':
            state.data.splice(action.index, 1);
            return {
                ...state,
                data: state.data.concat()
            }
        case 'Edit':
            state.data[action.editData].edit = true
            return {
                ...state, data: state.data.concat()
            }


        case 'cancel':
            state.data[action.editData].edit = false
            return {
                ...state, data: state.data.concat()
            }
        case 'update':
            state.data.splice(action.ind, 1, action.payload)
            return {
                ...state, data: state.data.concat()

            }
        case 'delAll':
            return {
                ...state, data: [].concat()
            }

        default: {
            return state
        }
    }
}

export default reducer