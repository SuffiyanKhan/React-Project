import { auth } from "../Configuration/Firebase"

export const Logout=()=>{
    try {
        auth.signOut()
        return "Success"
    } catch (error) {
        console.log(error)
    }
}