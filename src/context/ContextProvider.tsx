import React, { createContext, useContext } from "react";

const Context = createContext({})

interface Props {
    children: React.ReactElement
}

export const ContextProvider = ({ children }: Props) => {
    return (
        <Context.Provider value={{
            app: "React Template"
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context

export function useContextData() {
    return useContext(Context)
}