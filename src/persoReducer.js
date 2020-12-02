const persoReducer = (state, action) => {
    switch (action.type) {
        case 'set':
            return {
                ...state,
                ...action.payload
            }
    }
}

export default persoReducer