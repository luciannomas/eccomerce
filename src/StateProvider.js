import { createContext, useContext, useReducer } from 'react'

export const StateContext = createContext()

//Pasa las variables de un comp a otro comp
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value = { useReducer(reducer, initialState)} >
        { children }
    </ StateContext.Provider>
)

//get
export const useStateValue = () => useContext(StateContext)