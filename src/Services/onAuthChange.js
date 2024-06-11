import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Configuration/Firebase";

export const OnAuthChange = () => {
    return new Promise((resolve, reject) => {
        try {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    // User is signed in
                    const uid = user.uid;
                    resolve(uid);  // Resolve the Promise with the uid
                } else {
                    // User is signed out
                    resolve(null);  // Resolve with null if no user is signed in
                }
            });
        } catch (error) {
            console.error(error);
            reject(error);  // Reject the Promise with the error
        }
    });
};
