import { addDoc, collection, doc, deleteDoc, getDocs } from "firebase/firestore"
import { db } from "../Firebase/FirebaseConfig"
import StudentModel from "../Model/StudentModel"
class StudentService {
    async add(data) {
        let newStudent = new StudentModel()
        newStudent.name = data.name
        newStudent.RollNumber = data.RollNumber
        newStudent.email = data.email
        newStudent.phone = data.phone
        console.log(newStudent)
        
        const docRef = await addDoc(collection(db, "Student"), { ...newStudent })
        return docRef;
    }
    async all() {
        const querySnapshot = await getDocs(collection(db, "Student"));
        let Student = []
        querySnapshot.forEach((doc) => {
            Student.push({ id: doc.id, ...doc.data() })
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
        });
        return Student


    }

    async deleteItem(id) {
        const docRef = doc(db, "Student", id)
        await deleteDoc(docRef)
    }

}
export default new StudentService;