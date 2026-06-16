EMPLOYEE MANAGEMENT system

## Project Description
This is an very basic employee management system
built with:
-FastApi(Backend)
-React.js (Frontend)
-Microsoft SQL Server(Database)

## Feature
-Employee CRUD operation
-Department CRUD operation
-Project CRUD operation

## Backend set up
-create virtual environment
    python -m venv myenv
-Activate virtual Environment
    myenv\scripts\activate
-Install dependencies
    pip install -r requirements.txt
-Run fastapi server
    uvicorn app.main:app --reload

## FrontEnd setup
-Go to frontend folder
    cd frontend
-Install Packages
    npm install
-Start react app
    -npm run dev

## API Endpoints
### Employee
GET /employees
POST / employees
PUT /employees/{id}
DELETE /employees/{id}

### Department
GET /departments
POST / department
PUT /department/{id}
DELETE /department/{id}

### Projects
GET /projects
POST / project
PUT /project/{id}
DELETE /project/{id}

