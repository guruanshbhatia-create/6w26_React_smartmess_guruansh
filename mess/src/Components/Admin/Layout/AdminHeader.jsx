import {Link} from 'react-router-dom'
export default function AdminHeader() {
    return (
        <>
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
                       
                     
                       
                         <Link to="Categories" className="nav-item nav-link ">
                            Categories
                        </Link>
                        <Link to="Meal" className="nav-item nav-link ">
                            Meal
                        </Link>
                        <Link to="Dashboard" className="nav-item nav-link ">
                            Dashboard
                        </Link>
                         <Link to="/admin/student" className="nav-item nav-link ">
                            Student
                        </Link>
                         <Link to="/admin/Menu" className="nav-item nav-link ">
                            Menu
                        </Link>
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
        </>
    )
}