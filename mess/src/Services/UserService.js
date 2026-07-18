import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../firebase/firebaseConfig"
import UserModel from "../Model/UserModel"
import { doc, setDoc, getDoc } from "firebase/firestore"
import AuthService from "./AuthService"

class UserService {
    async register(payload) {
        const userRegister = await createUserWithEmailAndPassword(auth, payload.email, payload.password)

        let newUser = new UserModel()

        newUser.name = payload.name;
        newUser.email = payload.email;
        newUser.contact = payload.contact;
        newUser.address = payload.address;
        newUser.RollNumber = payload.RollNumber;
        newUser.userType = 4;
        newUser.id = userRegister.user.uid
        AuthService.setData({ ...newUser })

        await setDoc(doc(db, "users", userRegister.user.uid), { ...newUser })

        console.log("User register data: ", userRegister.user)
    }
    async login(data) {
        const authRes = await signInWithEmailAndPassword(auth, data.email, data.password)

        const docRef = doc(db, "users", authRes.user.uid);
        const docSnap = await getDoc(docRef);
        const userData = docSnap.data()
        if (docSnap.exists()) {
            let authData = {
                id: authRes.user.uid,
                name: userData.name,
                email: userData.email,
                token: authRes.user.accessToken,
                userType: userData.userType
            }
            await AuthService.setData(authData)
            return authData;
        } else {
            throw new Error("User not found")
        }

    }
}
export default new UserService