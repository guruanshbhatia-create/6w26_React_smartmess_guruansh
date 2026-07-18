import { useState } from "react"
import StudentService from '../../../services/StudentService'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function AddStudent() {
    const nav = useNavigate()
    const [StudentName, setStudentName] = useState('');
    const [RollNumber, setRollNumber] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    function addstudent(e) {
        e.preventDefault()
        try {
            let payload = {
                name: StudentName,
                RollNumber: RollNumber,
                email: email,
                phone : phone
            }
            StudentService.add(payload)
            toast.success("Student Added")
            nav(-1)
        } catch (err) {
            toast.error("Error adding Student")
            console.log("Error: ", err)
        }
    }
    return (
        <>
            {/* Single Page Header start */}
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Add Student</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="#">Pages</a>
                    </li>
                    <li className="breadcrumb-item active text-white">Add Student</li>
                </ol>
            </div>
            {/* Single Page Header End */}
            <div className="d-flex justify-content-center mt-5">

                <div className="col-lg-7">
                    <form action="" onSubmit={addstudent}  className="" >
                        <input
                            type="text"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter Your Name" onChange={(e) => { setStudentName(e.target.value) }}
                        />
                        <input
                            type="text"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter RollNumber" onChange={(e) => { setRollNumber(e.target.value) }}
                        />

                           <input
                            type="text"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter email" onChange={(e) => { setemail(e.target.value) }}
                        />

                           <input
                            type="text"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter Mobile Number" onChange={(e) => { setphone(e.target.value) }}
                        />
                        <button
                            className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}