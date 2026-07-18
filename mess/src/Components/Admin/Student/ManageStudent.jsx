import { Link } from "react-router-dom";
import StudentService from "../../../services/StudentService";
import { useEffect, useState } from "react";
import Swal from "sweetalert2"

export default function ManageStudent
() {

    const [Student, setStudent] = useState([])

  const getStudent = async () => {
        let res = await StudentService.all()
        setStudent(res)
    }

    async function deleteStudent(id) {

        const result =

        await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
    
            if (result.isConfirmed) {
                 await StudentService.deleteItem(id)
        getStudent()

                  Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
                });
            }  
    }


    useEffect(() => {
        getStudent()
    }, []); // calls getStudent
    // () function on first render only

    return (
        <>
            {/* Single Page Header start */}
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Student

                </h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                        <a href="#">Home</a>
                    </li>

                    <li className="breadcrumb-item active text-white">    Student

                    </li>
                </ol>
            </div>

            <div className="container mt-5">
                <div className="d-flex justify-content-between">
                    <h1 className="text-center">Student
                         List</h1>
                    <Link to='/admin/Student/add'>
                        <button
                            className=" btn border-secondary py-3 bg-white text-primary "
                            type="button"
                        >
                            Add Student

                        </button>
                    </Link>
                </div>
            </div>
            {/* Single Page Header End */}


                {/* Cart Page Start */}
                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Sr. No</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">RollNumber</th>
                                          <th scope="col">email</th>
                                            <th scope="col">phone</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">CreatedAt</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {Student.map((Student, index) => (

                                        < tr  >
                                            <td >
                                                <p className="mb-0 mt-4">{index + 1}</p>
                                            </td>
                                            <td>
                                                <p className="mb-0 mt-4">{Student
                                                .name}</p>
                                            </td>

                                            <td>
                                                <p className="mb-0 mt-4">{Student
                                                .RollNumber}</p>
                                            </td>

                                             <td>
                                                <p className="mb-0 mt-4">{Student
                                                .email}</p>
                                            </td>

                                             <td>
                                                <p className="mb-0 mt-4">{Student
                                                .phone}</p>
                                            </td>

                                            <td>
                                                <p className="mb-0 mt-4">{Student
                                                .Status ? "Active" : "Inactive"}</p>
                                            </td>
                                            <td>
                                                <p className="mb-0 mt-4">{new Date(Student
                                                    .CreatedAt).toLocaleDateString()}


                                                </p>
                                            </td>
                                            <td>
                                                <button className="btn btn-md rounded-circle bg-light border mt-4">
                                                    <i className="bi bi-pencil text-danger" />
                                                </button>
                                                &nbsp;
                                                <button onClick={() => { deleteStudent(Student.id) }} className="btn btn-md rounded-circle bg-light border mt-4">
                                                    <i className="bi bi-trash text-danger" />

                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                    }

                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
                {/* Cart Page End */}
            </>
    )
}