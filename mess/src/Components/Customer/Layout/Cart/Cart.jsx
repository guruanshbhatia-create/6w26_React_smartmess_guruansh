import CartServices from "../../../../Services/CartServices"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import MenuService from "../../../../services/MenuService"
export default function Cart(){

        const [Cart, setCart] = useState([])
      
          const getCart = async () => {
              let res = await CartServices.all()
              setCart(res)
              console.log(res);
              
          }

            useEffect(() => {getCart()}, []); 

            
    const [Menu, setMenu] = useState([])
 

    const getMenu = async () => {
        let res = await MenuService.all()
        setMenu(res)
        console.log("menu res",res);
        
    }

      useEffect(() => {getMenu()}, []); 
    return(
        <>
              <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">cart</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                        <a href="#">Home</a>
                    </li>

                    <li className="breadcrumb-item active text-white">    cart
                    </li>
                </ol>
            </div>

             <div className="container-fluid py-5">
                    <div className="container py-5">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>

                                        <th scope="col">Sr. No</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">image</th>
                                        <th scope="col">Price</th>

                                    </tr>
                                </thead>
                                <tbody>
                                   
                                         
            {Cart.map((Cart, index) => (

                                        < tr  >
                                            <td >
                                                <p className="mb-0 mt-4">{index + 1}</p>
                                            </td>
                                            <td>
                                                <p className="mb-0 mt-4">
                                                {Menu.find((item) => item.id == Cart.menuId)?.name || "id not matched"}
                                                </p>
                                            </td>
                                              <td>
                                                <p className="mb-0 mt-4">{Cart.quantity}</p>
                                            </td>

                                              <td>
                                                {/* <img className="mb-0 mt-4">
                                                {Menu.find((item) => item.id == Cart.menuId)?.image || "id not matched"}
                                                /> */}
                                                <img src={Menu.find((item) => item.id == Cart.menuId)?.image || "id not matched"} style={{height: "100px"}} alt="" />
                                            </td>

                                            
                                        </tr>
                                    ))
                                    } 
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
        </>
    )
}