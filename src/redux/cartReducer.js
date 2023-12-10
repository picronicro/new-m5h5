const initialState = {
    cart: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        default:
            return state
    }
}