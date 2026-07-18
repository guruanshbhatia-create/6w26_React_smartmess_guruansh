import { useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { getAuth } from "firebase/auth"
import UserService from "../../../../Services/UserService"
export default function Register(){
    const nav = useNavigate()
    const [email,setEmail] = useState("")
           const [password,setPassword] = useState("")
           const [name,setName] = useState("")
           const [contact,setContact] = useState("")
           const [RollNumber,setRollNumber] = useState("")
                const [address,setAddress] = useState("")



     const Register = async (e) => {
          e.preventDefault()

        let payload ={
             email: email,
             password: password,
             name: name,
             contact: contact,
             RollNumber: RollNumber,
             address: address
             
        }

        await UserService.register(payload)
        toast.success("succesfully registered")
        nav("/")
    }


    return(
        <>
          
             <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Register</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="#">Pages</a>
                    </li>
                    <li className="breadcrumb-item active text-white">Register</li>
                </ol>
            </div>

             <div className="container  d-flex justify-content-center" >
                                <form action="" className=" container  mt-5 " onSubmit={Register} >
                                      <input
                                        type="text"
                                        className="w-100 form-control border-0 py-3 mb-4"
                                        placeholder="Enter your name" onChange={(e) => {setName(e.target.value)}}
                                    />
                                      <input
                                        type="text"
                                        className="w-100 form-control border-0 py-3 mb-4"
                                        placeholder="Enter phone" onChange={(e) => {setContact(e.target.value)}}
                                    />
                                      <input
                                        type="text"
                                        className="w-100 form-control border-0 py-3 mb-4"
                                        placeholder="Enter Roll Number" onChange={(e) => {setRollNumber(e.target.value)}}
                                    />

                                        <input
                                        type="text"
                                        className="w-100 form-control border-0 py-3 mb-4"
                                        placeholder="Enter Address" onChange={(e) => {setAddress(e.target.value)}}
                                    />
                                    
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