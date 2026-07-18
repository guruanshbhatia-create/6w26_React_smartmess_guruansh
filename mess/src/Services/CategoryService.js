import { addDoc, collection, doc, deleteDoc, getDocs ,updateDoc, getDoc} from "firebase/firestore"
import { db } from "../Firebase/FirebaseConfig"
import CategoryModel from "../Model/CategoryModel"
class CategoryService {
    async add(data) {
       
        let newCategory = new CategoryModel()
        console.log("BA1: ", newCategory);
        newCategory.name = data.name
        newCategory.description = data.description
        newCategory.image = data.image
        
        const docRef = await addDoc(collection(db, "categories"), { ...newCategory })
        return docRef;
    }
    async all() {
        const querySnapshot = await getDocs(collection(db, "categories"));
        let Category = []
        querySnapshot.forEach((doc) => {
            Category.push({ id: doc.id, ...doc.data() })
        });
        return Category
    }
    async deleteItem(id) {
        console.log(id);
        
        const docRef = doc(db, "categories", id)
        await deleteDoc(docRef)
    }
    
    async single(id) {
        const docRef = doc(db, "categories", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
           
            return { id: docSnap.id, ...docSnap.data() }
        } else {
            
            console.log("No such document!");
            return false;
        }
    }

    async update(payload, id) {
        const categoryRef = doc(db, "categories", id);
        return await updateDoc(categoryRef, payload);
    }
}
export default new CategoryService;