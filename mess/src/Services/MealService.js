import { addDoc,deleteDoc,updateDoc,getDocs,collection,doc } from "firebase/firestore";
import { db } from "../Firebase/FirebaseConfig";
import MealModel from "../Model/MealModel"
class  MealService{
    async add(data){
        let newMeal = new MealModel()
         newMeal.name = data.name
         newMeal.description = data.description
          newMeal.image = data.image

         const docRef = await addDoc(collection(db,"Meal"), {...newMeal})
         return docRef;
    }


    
    async all() {
        const querySnapshot = await getDocs(collection(db, "Meal"));
        let Meal = []
        querySnapshot.forEach((doc) => {
            Meal.push({ id: doc.id, ...doc.data() })
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            // console.log(Meal);
            
        });
        return Meal
    }
        
    async deleteItem(id) {
        const docRef = doc(db, "Meal", id)
        await deleteDoc(docRef)
    }

       async single(id) {
            const docRef = doc(db, "Meal", id);
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
            const MealRef = doc(db, "Meal", id);
            return await updateDoc(MealRef, payload);
        }
}
export default new MealService;