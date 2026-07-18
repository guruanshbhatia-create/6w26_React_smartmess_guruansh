import { addDoc, collection, doc, deleteDoc, getDocs, updateDoc, getDoc, query, where } from "firebase/firestore"
import { db } from "../Firebase/FirebaseConfig"

class CartServices {
    async add(data) {

        try {
            const docRef = await addDoc(collection(db, "Cart"), data)
            return true;
        } catch (error) {
            return false
            console.log(error);

        }
    }

    async IsExist(uid, proId) {
        const querySnapshot = await getDocs(query(collection(db, "Cart"), where("userId", "==", uid), where("menuId", "==", proId)));
        let Category = []
        querySnapshot.forEach((doc) => {
            Category.push({ id: doc.id, ...doc.data() })


        });
        return Category
        //   console.log(Category);
    }

    async all() {
        const querySnapshot = await getDocs(collection(db, "Cart"));
        let Category = []
        querySnapshot.forEach((doc) => {
            Category.push({ id: doc.id, ...doc.data() })


        });
        return Category
        //   console.log(Category);
    }

    async deleteItem(id) {
        console.log(id);

        const docRef = doc(db, "Cart", id)
        await deleteDoc(docRef)
    }



    async single(id) {
        const docRef = doc(db, "Cart", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            // console.log("Document data:", docSnap.data());
            return { id: docSnap.id, ...docSnap.data() }
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
            return false;
        }
    }

    async update(payload, id) {
        try {
            const categoryRef = doc(db, "Cart", id);
             await updateDoc(categoryRef, payload);
             return true



        } catch (error) {
            console.log(error);
            return false

        }
    }


}
export default new CartServices;