import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import MenuService from "../../../../Services/MenuService"
import CategoryService from "../../../../services/CategoryService"
import CartServices from "../../../../Services/CartServices"
import { toast } from "react-toastify"
import AuthService from "../../../../Services/AuthService"

export default function Menu() {


    const [Menu, setMenu] = useState([])
    const { id } = useParams()

    const getMenu = async () => {
        let res = await MenuService.all(id)
        setMenu(res)
    }

    useEffect(() => { getMenu() }, [])

    const uid = AuthService.getUid()

    const AddToCart = async (id) => {

        let isExist = await CartServices.IsExist(uid, id)

        let CartId = isExist[0]?.id

        if (!!CartId) {
            console.log("Already in cart");

            let data = {
                quantity: isExist[0]?.quantity + 1
            }

            let res = await CartServices.update(data, CartId)

            if (res) {
                toast.success("Product added to the cart")
            } else {
                toast.error("Error while adding in the cart")
            }



        } else {
            console.log("not in  cart");


            let data = {
                menuId: id,
                userId: uid,
                quantity: 1
            }

            let res = await CartServices.add(data)

            if (res) {
                toast.success("Product added to the cart")
            } else {
                toast.error("Error while adding in the cart")
            }

        }
    }

    return (

        <>


            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Menu</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="#">Pages</a>
                    </li>
                    <li className="breadcrumb-item active text-white">Menu</li>
                </ol>
            </div>

            <div className="container mt-5">
                <div className="d-flex justify-content-between">

                    <h1 className="text-center">Menu List</h1>

                </div>
            </div>
            <div className="container d-flex my-5 justify-content-between">

                <div className="row">

                    {Menu.map((Menu) => (

                        <div className="col-md-3">
                            <div className="card">
                                <img src={Menu.image} className="card-img-top img-fluid" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{Menu.name}</h5>
                                    <p className="card-text">
                                        {Menu.description}
                                    </p>
                                     <p className="card-text">
                                        {Menu.Price}
                                    </p>
                                    <button onClick={() => {
                                        AddToCart(Menu.id)
                                    }} className="btn btn-primary">
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                    }

                </div>
            </div>


        </>
    )


}