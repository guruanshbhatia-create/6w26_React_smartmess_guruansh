import { useEffect, useState } from "react"
import CategoryService from '../../../services/CategoryService'
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

export default function EditCategory() {

    const [categoryName, setCategoryName] = useState('');
    const [description, setDescription] = useState('');

    const nav = useNavigate()

    const params = useParams()


    
    function updateCategory(e) {
        e.preventDefault()
       try {
            let payload = {
                name: categoryName,
                description: description
            }
        CategoryService.update(payload, params.id)
            nav(-1)
            toast.success("Category Updated")
        }catch(err){
            toast.error("Error updating category")
            console.log("Error: ", err)
        }
    }


    async function getCategoryDetails(){
        let res = await CategoryService.single(params.id)
        if(res){
            // console.log("Res: ", res);
            
            setCategoryName(res.name)
            setDescription(res.description)
        }else{
            toast.error("No such Document")
        }
    }

    useEffect(()=>{
        getCategoryDetails()
    }, [])

    return (
        <>
            {/* Single Page Header start */}
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Edit Category</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="#">Pages</a>
                    </li>
                    <li className="breadcrumb-item active text-white">Edit category</li>
                </ol>
            </div>
            {/* Single Page Header End */}

            <div className="d-flex justify-content-center mt-5">

                <div className="col-lg-7">
                    <form action="" className="" onSubmit={updateCategory} >


                        <input
                            type="text"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter Category name" value={categoryName} onChange={(e) => { setCategoryName(e.target.value) }}
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