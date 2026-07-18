import { useEffect, useState } from "react"
import MealService from '../../../services/MealService'
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

export default function EditMeal() {

    const [MealName, setMealName] = useState('');
    const [description, setDescription] = useState('');

    const nav = useNavigate()

    const params = useParams()


    function updateMeal(e) {
        e.preventDefault()
       try {
            let payload = {
                name: MealName,
                description: description
            }
        MealService.update(payload, params.id)
            nav(-1)
            toast.success("Meal Updated")
        }catch(err){
            toast.error("Error updating Meal")
            console.log("Error: ", err)
        }
    }


    async function getMealDetails(){
        let res = await MealService.single(params.id)
        if(res){
            // console.log("Res: ", res);
            
            setMealName(res.name)
            setDescription(res.description)
        }else{
            toast.error("No such Document")
        }
    }

    useEffect(()=>{
        getMealDetails()
    }, [])

    return (
        <>
            {/* Single Page Header start */}
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Edit Meal</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="#">Pages</a>
                    </li>
                    <li className="breadcrumb-item active text-white">Edit Meal</li>
                </ol>
            </div>
            {/* Single Page Header End */}

            <div className="d-flex justify-content-center mt-5">

                <div className="col-lg-7">
                    <form action="" className="" onSubmit={updateMeal} >


                        <input
                            type="text"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter Meal name" value={MealName} onChange={(e) => { setMealName(e.target.value) }}
                        />
                        <input
                            type="text"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter description" value={description} onChange={(e) => { setDescription(e.target.value) }}
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