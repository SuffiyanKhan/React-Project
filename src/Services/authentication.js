import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Configuration/Firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

export const SignupAuthentication = async (data) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
        const user = userCredential.user;
        await setDoc(doc(db, "users", user.uid), {
            name: data.firstName + " " + data.lastName,
            email: data.email,
            password: data.password,
            isActive: false,
            timestamp: serverTimestamp()
        });
        return user;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = errorCode.slice(5).toUpperCase();
        const errMessage = errorMessage.replace(/-/g, " ");
        return errMessage
    }
}
