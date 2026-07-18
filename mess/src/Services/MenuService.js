import { db } from "../Firebase/FirebaseConfig"
import MenuModel from "../Model/MenuModel"
import { addDoc, collection, getDoc, getDocs, doc, deleteDoc, query, where } from "firebase/firestore"

class MenuService {
    async add(data) {
        let newMenu = new MenuModel()
        newMenu.name = data.name
        newMenu.description = data.description
        newMenu.image = data.image
        newMenu.CateId = data.CateId
        newMenu.Price = data.Price
        const docRef = await addDoc(collection(db, "Menu"), { ...newMenu })
        return docRef;
    }
    async all(id) {

        let querySnapshot=null

        if (!!id) {
            querySnapshot = await getDocs(query(collection(db, "Menu"),where("CateId","==",id)));
        } else {
            querySnapshot = await getDocs(collection(db, "Menu"));
        }


        let Menu = []
        querySnapshot.forEach((doc) => {
            Menu.push({ id: doc.id, ...doc.data() })
            console.log(doc.id, " => ", doc.data());

        });
        return Menu
    }

    async deleteItem(id) {
        const docRef = doc(db, "Menu", id)
        await deleteDoc(docRef)
    }
    async single(id) {
        const docRef = doc(db, "Menu", id);
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
        const MenuRef = doc(db, "Menu", id);
        return await updateDoc(MenuRef, payload);
    }
}
export default new MenuService;