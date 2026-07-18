import { useState } from "react";
import MealService from "../../../Services/MealService"
import {toast} from "react-toastify"
import { useNavigate} from "react-router-dom"
import axios from "axios"
export default function AddMeal(){
    const nav = useNavigate()
    const [MealName, setMealName] = useState("")
    const [Description, setDescription] = useState("")
     const [image, setimage] = useState('');
    async function addMeal(e){

        e.preventDefault()
         let imageUrl = ""


           if (image) {
            const imagedata = new FormData()
            imagedata.append("file", image)
            imagedata.append("upload_preset", "preset")

            const response = await axios.post("https://api.cloudinary.com/v1_1/tga2my4f/image/upload", imagedata)
            console.log("Res: ", response);
            imageUrl = response.data.secure_url
            console.log("URL: ", imageUrl);

        
        }


        try{
            let payload = {
                name : MealName,
                description : Description,
                image: imageUrl
            }
            MealService.add(payload)
            toast.success("successfuly Added")
            console.log("added");
            nav('/admin/Meal')
        }catch (err){
            toast.error("error")
            console.log("error", err);
        }
    }

return(
    <>
            {/* Single Page Header start */}
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Add Meal</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="#">Pages</a>
                    </li>
                    <li className="breadcrumb-item active text-white">Add Meal</li>
                </ol>
            </div>
            {/* Single Page Header End */}
            <div className="d-flex justify-content-center mt-5">

                <div className="col-lg-7">
                    <form action="" onSubmit={addMeal} className="" >
                        <input
                            type="text"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter Meal Name" onChange={(e) => { setMealName(e.target.value) }}
                        />
                        <input
                            type="text"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter Description" onChange={(e) => { setDescription(e.target.value) }}
                        />
                          <input
                            type="file"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter Description" onChange={(e) => { setimage(e.target.files[0]) }}
                        />
                        <button
                            className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
    </>
)
}