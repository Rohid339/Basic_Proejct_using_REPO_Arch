import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

import EmployeePage from "../pages/EmployeePage";
import CreateEmployee from "../pages/CreateEmployee";
import EditEmployee from "../components/EditEmployee";

import ProjectForm from "../components/project/ProjectForm";
import CreateProject from "../pages/CreateProject";
import { EditProject } from "../components/project/EditProject";

import DepartmentForm from "../components/department/DepartmentForm";
import CreateDepartment from "../pages/CreateDepartment";
import { EditDepartment } from "../components/department/EditDepartment";
import DepartmentPage from "../pages/DepartmentPage";
import ProjectPage from "../pages/ProjectPage";
import AuditPage from "../pages/AuditPage";

import DesignationForm from "../components/Designation/DesignationForm";
import { CreateDesignation } from "../pages/CreateDesignation";
import { DesignationPage } from "../pages/DesignationPage";



function AppRoutes() {

    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                {/* Employee */}

                <Route
                    path="/employees"
                    element={<EmployeePage />}
                />

                <Route
                    path="/employees/create"
                    element={<CreateEmployee />}
                />

                <Route
                    path="/employees/edit/:id"
                    element={<EditEmployee />}
                />

                {/* Department */}

                <Route
                    path="/departments"
                    element={<DepartmentPage />}
                />

                <Route
                    path="/department/create"
                    element={<CreateDepartment />}
                />

                <Route
                    path="/department/edit/:id"
                    element={<EditDepartment />}
                />

                {/* Project */}

                <Route
                    path="/projects"
                    element={<ProjectPage />}
                />

                <Route
                    path="/project/create"
                    element={<CreateProject />}
                />

                <Route
                    path="/project/edit/:id"
                    element={<EditProject />}
                />
                <Route
                    path="/audit"
                    element={<AuditPage />}
                />

                {/* Designation */}

                <Route
                    path="/designation"
                    element={<DesignationPage />}
                />

                <Route
                    path="/designation/create"
                    element={<CreateDesignation />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default AppRoutes;