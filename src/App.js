import {BrowserRouter as Router,Routes,Route, Navigate} from "react-router-dom";
import './App.css';
import Home from "./views/home/home";
import Layout from "./views/home/layout";
import Addcategory from "./views/home/category/addcategory";
import Listcategory from "./views/home/category/listcategory";
import Addsubcategory from "./views/home/subcategory/addsubcategory";
import Listsubcategory from "./views/home/subcategory/listsubcategory";
import Updatecategory from "./views/home/category/updatecategory";
import Updatesubcat from "./views/home/subcategory/updatesubcat";
import Addproduct from "./views/home/product/addproduct";
import Listproduct from "./views/home/product/listproduct";
import Login from "./views/login";
import Updateproduct from "./views/home/product/updateproduct";
import Carousel from "./component/carousel";
import Register from "./views/register";
import Resetpassword from "./views/resetpassword";
import ForgetPassword from "./views/forgetpassword";
import Detailproduct from "./views/home/product/detailproduct";

function App(){
    const PrivateRoute = ({children})=>{ 
      const user = localStorage.getItem('user') ?JSON.parse(localStorage.getItem("user")) :null;
      console.log("localstorage" , user.user);
      if( !user || user?.user?.items !== "admin"){
        return <Navigate to='/login'></Navigate>
      }
return children
    }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}>
        <Route path="/" element={<Layout/>}/>
        <Route path="/addcatec" element ={<Addcategory/>}/>
        <Route path="/category" element ={<Listcategory/>}/>
        <Route path="/addsubcat" element={<Addsubcategory/>}/>
        <Route path="/list" element={<Listsubcategory/>}/>
        <Route path="/updatecateg/:id" element={<Updatecategory/>}/>
        <Route path="/updatedsubcatec/:id" element={<Updatesubcat/>}/>
        <Route path="/product" element={<Addproduct/>}/>
        <Route path="/listproduct" element={<Listproduct/>}/>
        <Route path="/Updateproduct/:id" element={<Updateproduct/>}/>
        <Route path="/detailproduct/:id" element={<Detailproduct/>}/>
        
        </Route>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path='/forgetpassword' element={<ForgetPassword/>}/>
        <Route path="/auth/:token" element={<Resetpassword/>}/>
        </Routes>

    </Router>
  )
}
export default App;
