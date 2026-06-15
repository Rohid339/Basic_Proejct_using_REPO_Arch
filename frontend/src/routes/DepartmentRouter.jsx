import { BrowserRouter, Routes, Route } from "react-router-dom";
import DepartmentList from "../components/department/DepartmentList";
import DepartmentForm from "../components/department/DepartmentForm";
import { EditDepartment } from "../components/department/EditDepartment";

export const DepartmentRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/projects" element={<DepartmentList />} />

        <Route path="/project/create" element={<DepartmentForm />} />

        <Route path="/project/edit/:id" element={<EditDepartment />} />
      </Routes>
    </BrowserRouter>
  );
};
