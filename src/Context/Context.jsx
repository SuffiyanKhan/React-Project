import { createContext, useContext, useState, } from "react";

const GlobalContext = createContext();

const useGlobalState = () => useContext(GlobalContext)



let GlobalStates = (children) => {
    const [orderData, setOrderData] = useState([])
    const [productCounting, setProductCounting] = useState("");
    const [deleteCount, setDeleteCount] = useState(0)
    const [checkAuthentication, setCheckAuthentication] = useState(true)


    return <GlobalContext.Provider value={{
        productCounting,
        deleteCount,
        orderData,
        checkAuthentication,
        setCheckAuthentication,
        setOrderData,
        setDeleteCount,
        setProductCounting
    }}>
        {children.children}
    </GlobalContext.Provider>
}

export {
    GlobalStates,
    useGlobalState
}