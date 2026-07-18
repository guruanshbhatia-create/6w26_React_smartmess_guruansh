import { useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import UserService from "../../../../Services/UserService";
    export default function Login(){
    const nav = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submitForm(e) {
        e.preventDefault();

        let payload = {
            email:email,
            password:password
        };

        try {
            const user = await UserService.login(payload);
            toast.success("Login Success");
            if (user.userType == "1") {
                nav("/admin");
            } else { 
                nav("/");
            }
        } catch (err) {
            toast.error(err.message);
        }
    }
    return(
        <>
          {/* Single Page Header start */}
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Login</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="#">Pages</a>
                    </li>
                    <li className="breadcrumb-item active text-white">Login</li>
                </ol>
            </div>
            {/* Single Page Header End */}
           <div className="container  d-flex justify-content-center" >
                                <form action="" className=" container  mt-5 " onSubmit={submitForm} >
                                    <input
                                        type="text"
                                        className="w-100 form-control border-0 py-3 mb-4"
                                        placeholder="Enter email" onChange={(e) => {setEmail(e.target.value)}}
                                    />
                                    <input
                                        type="password"
                                        className="w-100 form-control border-0 py-3 mb-4"
                                        placeholder="Enter Password"  onChange={(e) => {setPassword(e.target.value)}}
                                    />
                                    <button
                                        // background color="orange"
                                        className="w-100 btn form-control border-secondary py-3  text-primary hover "
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
        </>
    )
}