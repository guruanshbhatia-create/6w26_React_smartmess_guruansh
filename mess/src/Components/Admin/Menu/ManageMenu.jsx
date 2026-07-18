import { Link } from "react-router-dom";
import MenuService from "../../../services/MenuService";
import { useEffect, useState } from "react";
import Swal from "sweetalert2"

export default function ManageMenu() {

    const [Menu, setmenu] = useState([])

    const getMenu = async () => {
        let res = await MenuService.all()
        setmenu(res)
    }

    async function deleteMenu(id) {

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
                 await MenuService.deleteItem(id)
        getMenu()

                  Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
                });
            }  
    }


    useEffect(() => {
        getMenu()
    }, []); 

    return (
        <>
            {/* Single Page Header start */}
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Menu</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                        <a href="#">Home</a>
                    </li>

                    <li className="breadcrumb-item active text-white">    Menu
                    </li>
                </ol>
            </div>

            <div className="container mt-5">
                <div className="d-flex justify-content-between">
                    <h1 className="text-center">Menu List</h1>
                    <Link to='/admin/Menu/add'>
                        <button
                            className=" btn border-secondary py-3 bg-white text-primary "
                            type="button"
                        >
                            Add Menu
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
                                        <th scope="col">image</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">CreatedAt</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {Menu.map((Menu, index) => (

                                        < tr  >
                                            <td >
                                                <p className="mb-0 mt-4">{index + 1}</p>
                                            </td>
                                            <td>
                                                <p className="mb-0 mt-4">{Menu.name}</p>
                                            </td>

                                             <td>
                                                <img src={Menu.image} alt=""style={{height:"100px",width:"100px"}} ></img>
                                            </td>

                                            <td>
                                                <p className="mb-0 mt-4">{Menu.description}</p>
                                            </td>

                                            <td>
                                                <p className="mb-0 mt-4">{Menu.Price}</p>
                                            </td>
                                            <td>
                                                <p className="mb-0 mt-4">{Menu.status ? "Active" : "Inactive"}</p>
                                            </td>
                                            <td>
                                                <p className="mb-0 mt-4">{new Date(Menu.createdAt).toLocaleDateString()}



                                                </p>
                                            </td>
                                            <td>
                                                <Link to={`/admin/Edit/Menu/${Menu.id}`}>
                                                <button className="btn btn-md rounded-circle bg-light border mt-4">
                                                    <i className="bi bi-pencil text-danger" />
                                                </button>
                                                </Link>
                                                &nbsp;
                                                <button onClick={() => { deleteMenu(Menu.id) }} className="btn btn-md rounded-circle bg-light border mt-4">
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