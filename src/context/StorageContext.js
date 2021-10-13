import React, {createContext, useReducer} from 'react';
import {reducer} from '../reducers'

export const StorageContext = createContext();

export const StorageProvider = props => {
    const [state, dispatch] = useReducer(reducer, null);
    return (
        <StorageContext.Provider value={{state, dispatch}}>
            {props.children}
        </StorageContext.Provider>
    )
}





