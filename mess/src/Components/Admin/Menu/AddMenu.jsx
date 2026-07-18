import { useEffect, useState } from "react";
import MenuService from "../../../Services/MenuService"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import CategoryService from "../../../services/CategoryService";
export default function AddMenu() {
    const nav = useNavigate()
    const [MenuName, setMenuName] = useState("")
    const [Description, setDescription] = useState("")
    const [CateId, setCateId] = useState("")
    const [image, setimage] = useState('')
    const [Price, setPrice] = useState("");

    const [categories, setCategories] = useState([])

    async function getCategories() {
        let res = await CategoryService.all()
        setCategories(res)
    }


    useEffect(() => {
        getCategories()
    }, []); 




    async function addMenu(e) {

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


        try {
            let payload = {
                name: MenuName,
                description: Description,
                image: image,
                CateId:CateId,
                Price:Price
            }
            MenuService.add(payload)
            toast.success("successfuly Added")
            console.log("added");

            nav('/admin/Menu')
        } catch (err) {
            toast.error("error")
            console.log("error", err);
        }
    }

    return (
        <>
            {/* Single Page Header start */}
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Add Menu</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="#">Pages</a>
                    </li>
                    <li className="breadcrumb-item active text-white">Add Menu</li>
                </ol>
            </div>
            {/* Single Page Header End */}
            <div className="d-flex justify-content-center mt-5">

                <div className="col-lg-7">
                    <form action="" onSubmit={addMenu} className="" >
                        <input
                            type="text"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter Menu Name" onChange={(e) => { setMenuName(e.target.value) }}
                        />
                        <input
                            type="text"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter Description" onChange={(e) => { setDescription(e.target.value) }}
                        />
                        <select className="w-100 form-control border-0 py-3 mb-4"  name="" value={CateId} onChange={(e) => { setCateId(e.target.value) }} id="">
                            <option selected disabled value="">Choose one</option>

                            {
                                categories.map((el)=>(
                                      <option value={el.id}>{el.name}</option>

                                ))
                            }

                        </select>
                        <input
                            type="file"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter Description" onChange={(e) => { setimage(e.target.files[0]) }}
                        />
                          <input
                            type="text"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter Price" onChange={(e) => { setprice(e.target.value) }}
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