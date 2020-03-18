
const cartItems = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            return[...state, action.paylode]
        case 'REMOVE_FROME_CART':
            return state.filter(cartItems=>cartItems.id !==
                action.paylode.id)
    }
    return state
}
export default cartItems;