import { BrowserRouter,Routes,Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Layout from "./Components/Customer/Layout/Layout"
import Header from "./Components/Customer/Layout/Header"
import Footer from "./Components/Customer/Layout/Footer"
import Home from "./Components/Customer/Layout/Home/Home"
import Menu from "./Components/Customer/Layout/Menu/Menu"
import Login from "./Components/Customer/Layout/Login/Login"
import AdminLayout from "./Components/Admin/Layout/AdminLayout"
import Dashboard from "./Components/Admin/Dashboard/Dashboard"
import ManageCategories from "./Components/Admin/Category/ManageCategories"
import AddCategory from "./Components/Admin/Category/AddCategory"
import AddMeal from "./Components/Admin/Meal/AddMeal"
import ManageMeal from "./Components/Admin/Meal/ManageMeal"
import AddStudent from "./Components/Admin/Student/AddStudent"
import ManageStudent from "./Components/Admin/Student/ManageStudent"
import AddMenu from "./Components/Admin/Menu/AddMenu"
import Contact from "./Components/Customer/Layout/Contact/Contact"
import ManageMenu from "./Components/Admin/Menu/ManageMenu"
import EditMeal from "./Components/Admin/Meal/EditMeal"
import EditMenu from "./Components/Admin/Menu/EditMenu"
import Category from "./Components/Customer/Layout/Category/Category"
import Register from "./Components/Customer/Layout/Login/Register"
import EditCategory from "./Components/Admin/Category/EditCategory"
import Cart from "./Components/Customer/Layout/Cart/Cart"
function App() {
  return (
   <>
   
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Layout/>}>
       <Route path="/login" element={<Login/>}></Route>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/Menu" element={<Menu/>}></Route>
       <Route path="/Menu/:id" element={<Menu/>}></Route>
       <Route path="/contact" element={<Contact/>}></Route>
       <Route path="/category" element={<Category/>}></Route>
       <Route path="/Register" element={<Register/>}></Route>
       <Route path="/cart" element={<Cart/>}></Route>
       </Route>

         {/* Admin */}
       <Route path="/admin" element={<AdminLayout/>}>
       <Route path="/admin/Dashboard" element={<Dashboard/>}></Route>
       <Route path="/admin/Categories" element={<ManageCategories/>}></Route> 
       <Route path="/admin/Category/add" element={<AddCategory/>}></Route>
       <Route path="/admin/Meal" element={<ManageMeal/>}></Route>
       <Route path="/admin/Meal/add" element={<AddMeal/>}></Route>
       <Route path="/admin/Student" element={<ManageStudent/>}></Route>
       <Route path="/admin/Student/add" element={<AddStudent/>}></Route>
       <Route path="/admin/Menu" element={<ManageMenu/>}></Route>
       <Route path="/admin/Menu/add" element={<AddMenu/>}></Route>
       <Route path="/admin/Edit/Category/:id" element={<EditCategory/>}></Route>
       <Route path="/admin/Edit/Menu/:id" element={<EditMenu/>}></Route>
       </Route>
    </Routes>    
    </BrowserRouter>
    <ToastContainer/>
   </>
  )
}
export default App