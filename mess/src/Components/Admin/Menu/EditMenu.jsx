import { useEffect, useState } from "react"
import MenuService from '../../../services/MenuService'
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

export default function EditMenu() {

    const [MenuName, setMenuName] = useState('');
    const [description, setDescription] = useState('');
    const [MenuPrice, setPrice] = useState('');

    const nav = useNavigate()

    const params = useParams()

    function updateMenu(e) {
        e.preventDefault()
       try {
            let payload = {
                name: MenuName,
                description: description,
                Price: Price
            }
        MenuService.update(payload, params.id)
            nav(-1)
            toast.success("Menu Updated")
        }catch(err){
            toast.error("Error updating Menu")
            console.log("Error: ", err)
        }
    }


    async function getMenuDetails(){
        let res = await MenuService.single(params.id)
        if(res){
            // console.log("Res: ", res);
            
            setMenuName(res.name)
            setDescription(res.description)
        }else{
            toast.error("No such Document")
        }
    }

    useEffect(()=>{
        getMenuDetails()
    }, [])

    return (
        <>
            {/* Single Page Header start */}
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Edit Menu</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="#">Pages</a>
                    </li>
                    <li className="breadcrumb-item active text-white">Edit Menu</li>
                </ol>
            </div>
            {/* Single Page Header End */}

            <div className="d-flex justify-content-center mt-5">

                <div className="col-lg-7">
                    <form action="" className="" onSubmit={updateMenu} >


                        <input
                            type="text"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter Menu name" value={MenuName} onChange={(e) => { setMenuName(e.target.value) }}
                        />
                        <input
                            type="text"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter description" value={description} onChange={(e) => { setDescription(e.target.value) }}
                        />
                        
                           <input
                            type="text"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter description" value={Price} onChange={(e) => { setPrice(e.target.value) }}
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