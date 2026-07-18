import { Link } from "react-router-dom"
export default function Dashboard() {
    return (
        <>
            {/* Single Page Header start */}
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Admin Dashboard</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                        <Link to="">Home</Link>
                    </li>
             
                    <li className="breadcrumb-item active text-white">Dashboard</li>
                </ol>
            </div>
            <div className="container mt-5">
                <h1 className="text-center">Welcome to Admin Dashboard</h1>
            </div>
            {/* Single Page Header End */}
        </>
    )
}