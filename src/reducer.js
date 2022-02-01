export const initialState = {
    basket: [],
    user: null, // Create user in null
    shippingData: [],
    paymentMessage: "",
}

export const actionTypes = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
    REMOVE_ITEM: "REMOVE_ITEM",
    SET_USER: "SET_USER",
    EMPTY_BASKET: "EMPTY_BASKET",
    SET_SHIPPINGDATA: "SET_SHIPPINGDATA",
    SET_PAYMENT_MESSAGE: "SET_PAYMENT_MESSAGE"
}

export const  getBasketTotal = (basket) => {
    return basket.reduce((amount, item) => item.price + amount, 0)
}

//TODO: SEGUN LA ACCION CAMBIA EL ESTADO INICIAL.
//TODO: "action.type" ESCUCHA Y MODIFICA EL ESTADO, CUANDO ESTA EN "ADD_TO_BACKET" LO AGREGA EN EL ARRAY AUTOMATICAMENTE
const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            }

        case "REMOVE_ITEM": /* TODO:Devuelve el indice del producto a eliminar. Posicion del id en el Array  */
            const index = state.basket.findIndex((basketItem => basketItem.id === action.id))
            const newBasket = [...state.basket]

            if (index >= 0){
                // TODO: Encuentra y elimina
                newBasket.splice(index, 1)
            }
            return {
                ...state,
                basket : newBasket,
                }
            
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        
        case "EMPTY_BASKET":
            return {
                ...state,
                basket: action.basket // estara vacio.
            }
        
        case "SET_SHIPPINGDATA": // GUARDA INFO DEL FORM
            return {
                ...state,
                shippingData: action.shippingData // estara vacio.
            }
        
        case "SET_PAYMENT_MESSAGE":
            return {
                ...state,
                paymentMessage: action.paymentMessage,
            }


        default: return state; 
    }
}

export default reducer


