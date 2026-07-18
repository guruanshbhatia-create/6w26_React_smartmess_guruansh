import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from '../../../services/AuthService'
import { toast } from "react-toastify";


export default function Header() {


    const [email, setEmail] = useState('')

    function getEmail(){
       const res =  AuthService.getEmail()
       setEmail(res)
    }

    const nav = useNavigate()
    function logout(){
        AuthService.logout();
        toast.success("Logged Out")
        nav("/")
    }


    useEffect(()=>{
        getEmail();
    })

// export default function Header() {
    return (
        <>
            {/* Navbar Start */}
            <nav
                className="navbar navbar-expand-lg navbar-dark fixed-top py-lg-0 px-lg-5 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <Link to="/" className="navbar-brand ms-4 ms-lg-0">
                    <h1 className="text-primary m-0">Campus Bite</h1>
                </Link>
                <button
                    type="button"
                    className="navbar-toggler me-4"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav mx-auto p-4 p-lg-0">
                          <Link to="/" className="nav-item nav-link active">
                            Home
                        </Link>
                          <Link to="/category" className="nav-item nav-link active">
                           Category
                        </Link>
                        <Link to="/menu" className="nav-item nav-link active">
                            Menu
                        </Link>
                  
                        <Link to="/contact" className="nav-item nav-link active">
                            Contact
                        </Link>
                          <Link to="/cart" className="nav-item nav-link active">
                            Cart
                        </Link>
                       {email?

                        

                        <Link to="" onClick={logout} className="nav-item nav-link active">
                            Logout
                        </Link>
                        :
                        <>
                        <Link to="/login" className="nav-item nav-link active">
                            Login
                        </Link>

                          <Link to="/Register" className="nav-item nav-link active">
                            Register
                        </Link>
                        </>}
                    
                       
                    </div>
                    <div className=" d-none d-lg-flex">
                        <div className="flex-shrink-0 btn-lg-square border border-light rounded-circle">
                            <i className="fa fa-phone text-primary" />
                        </div>
                        <div className="ps-3">
                            <small className="text-primary mb-0">Call Us</small>
                            <p className="text-primary fs-5 mb-0 ">9877443166</p>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Navbar End */}
        </>
    )
}
