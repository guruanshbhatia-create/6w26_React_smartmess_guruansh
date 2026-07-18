import { Link } from "react-router-dom";
import CategoryService from "../../../services/CategoryService";
import { useEffect, useState } from "react";
import Swal from "sweetalert2"

export default function ManageCategories() {

    const [categories, setCategories] = useState([])
    async function getCategories() {
        let res = await CategoryService.all()
        setCategories(res)
    }

    // useEffect() -- HOOK - to handle side effects

    // SYNTAX - Way 1

    //   useEffect(() => {
    // task to be done
    //   }, [dependancyArray])

    useEffect(() => {
        getCategories()
    }, []); // calls getCategory() function on first render only

    async function deleteCategory(id) {
        console.log(id)
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
            console.log("Confirmed")
            await CategoryService.deleteItem(id)
            getCategories()

            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    }


    return (
        <>
            {/* Single Page Header start */}
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Categories</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                        <a href="#">Home</a>
                    </li>

                    <li className="breadcrumb-item active text-white">    Categories
                    </li>
                </ol>
            </div>

            <div className="container mt-5">
                <div className="d-flex justify-content-between">
                    <h1 className="text-center">Categories List</h1>
                    <Link to='/admin/category/add'>
                        <button
                            className=" btn border-secondary py-3 bg-white text-primary "
                            type="button"
                        >
                            Add Category
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
                                    <th scope="col">Description</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">CreatedAt</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>

                                {categories.map((category, index) => (

                                    < tr  >
                                        <td >
                                            <p className="mb-0 mt-4">{index + 1}</p>
                                        </td>
                                        <td>
                                            <p className="mb-0 mt-4">{category.name}</p>
                                        </td>

                                        <td>
                                            <p className="mb-0 mt-4">{category.description}</p>
                                        </td>
                                        <td>
                                            <img src={category.image} alt="" style={{ height: "100px", width: "100px" }}></img>
                                        </td>
                                        <td>
                                            <p className="mb-0 mt-4">{category.status ? "Active" : "Inactive"}</p>
                                        </td>
                                        <td>
                                            <p className="mb-0 mt-4">{new Date(category.cretedAt).toLocaleDateString()}


                                            </p>
                                        </td>
                                        <td>
                                            <Link to={`/admin/Edit/Category/${category.id}`}>
                                                <button className="btn btn-md rounded-circle bg-light border mt-4">
                                                    <i className="bi bi-pencil text-danger" />
                                                </button>
                                            </Link>
                                            &nbsp;
                                            <button onClick={() => {
                                                console.log(category.id);
                                                deleteCategory(category.id)
                                            }} className="btn btn-md rounded-circle bg-light border mt-4">
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