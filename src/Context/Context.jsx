import { createContext, useContext, useState, } from "react";
import { OnAuthChange } from "../Services/onAuthChange";

const GlobalContext = createContext();

const useGlobalState = () => useContext(GlobalContext)



let GlobalStates = (children) => {
    const [orderData, setOrderData] = useState([])
    const [productCounting, setProductCounting] = useState("");
    const [deleteCount, setDeleteCount] = useState(0)
    const [checkAuthentication, setCheckAuthentication] = useState(true)
    const [userAuth, setUserAuth] = useState(false)
    const [navbarNavigation, setNavbarNavigation] = useState(false);
    OnAuthChange()
        .then((uid) => {
            if (uid) {
                setUserAuth(true)
            } else {
                setUserAuth(false)
            }
        })
        .catch((error) => {
            console.error('Error detecting auth state change:', error);
        });



    return <GlobalContext.Provider value={{
        productCounting,
        deleteCount,
        orderData,
        checkAuthentication,
        userAuth,
        navbarNavigation,
        setNavbarNavigation,
        setUserAuth,
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