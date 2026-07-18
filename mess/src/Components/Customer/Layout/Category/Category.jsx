import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import CategoryService from "../../../../Services/CategoryService"

export default function Category() {


    const [Category, setCategory] = useState([])

    const getCategory = async () => {
        let res = await CategoryService.all()
        setCategory(res)
    }

    useEffect(() => { getCategory() }, [])

    return (

        <>

            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Category</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="#">Pages</a>
                    </li>
                    <li className="breadcrumb-item active text-white">Category</li>
                </ol>
            </div>

            <div className="container mt-5">
                <div className="d-flex justify-content-between">

                    <h1 className="text-center">Category List</h1>

                </div>
            </div>

            <div className="container ">
                <div className="row  d-flex my-5 justify-content-around">
                    {Category.map((Category) => (
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={Category.image} style={{ height: "250px", objectFit: "" }} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{Category.name}</h5>
                                <p className="card-text">
                                    {Category.description}
                                </p>
                                <Link to={"/menu/"+Category.id} className="btn btn-danger">
                                   
                                        View Category
                                  
                                </Link>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </>
    )
}