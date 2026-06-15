import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeList from "../components/EmployeeList";
import CreateEmployee from "../pages/CreateEmployee";
import EditEmployee from "../components/EditEmployee";
import Home from "../pages/Home";
function EmployeeRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/employees" element={<EmployeeList/>}/>
                <Route path="/create" element={<CreateEmployee/>}/>
                <Route path="/edit/:id" element={<EditEmployee/>}/>
            </Routes>
        </BrowserRouter>
    )
}export default EmployeeRouter