import { createContext, useContext, useState, } from "react";
import { OnAuthChange } from "../Services/onAuthChange";

const GlobalContext = createContext();

const useGlobalState = () => useContext(GlobalContext)



let GlobalStates = (children) => {
    const [orderData, setOrderData] = useState([])
    const [productCounting, setProductCounting] = useState("");
    const [deleteCount, setDeleteCount] = useState(0)
    const [checkAuthentication, setCheckAuthentication] = useState(true)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userAuth, setUserAuth] = useState(false)
    OnAuthChange()
        .then((uid) => {
            if (uid) {
                console.log('User ID:', uid);
                setUserAuth(true)
                // Do something with the uid
            } else {
                console.log('No user is signed in');
                // Handle the case where no user is signed in
            }
        })
        .catch((error) => {
            console.error('Error detecting auth state change:', error);
            // Handle the error
        });



    return <GlobalContext.Provider value={{
        productCounting,
        deleteCount,
        orderData,
        checkAuthentication,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        userAuth,
        setUserAuth,
        email,
        setEmail,
        password,
        setPassword,
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