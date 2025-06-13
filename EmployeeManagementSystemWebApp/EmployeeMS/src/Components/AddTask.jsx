import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Task from "./Task";

const AddTask = () => {
  const [task, setTask] = useState({
    task_name:"",
    task_description:"",
    due_date:"",
    status:"",
    project_id:"",
    employee_id:""
  }, []);
  const [project, setProject] = useState([]);
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/project")
      .then((result) => {
        if (result.data.Status) {
            console.log("Project Data:", result.data.Result);
          setProject(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:3000/auth/employee")
      .then((result) => {
        if (result.data.Status) {
            console.log("Employee Data:", result.data.Result);
          setEmployee(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Task state before submit:", task);
    axios.post('http://localhost:3000/auth/add_task', {
        task_name: task.task_name,
        task_description: task.task_description,
        due_date: task.due_date,
        status: task.status,
        p_id: task.p_id,
        id: task.id
    }
    ,
  {
    headers: {
      "Content-Type": "application/json"
    },
})
    .then(result => {
        if(result.data.Status) {
            navigate('/dashboard/task')
        } else {
            alert(result.data.Error)
        }
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Task</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Task Name"
              onChange={(e) =>
                setTask({ ...task, task_name: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputdescription" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputdescription"
              placeholder="Enter Task Description"
              autoComplete="off"
              onChange={(e) =>
                setTask({ ...task, task_description: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputduedate" className="form-label">
              DueDate
            </label>
            <input
              type="date"
              className="form-control rounded-0"
              id="inputduedate"
              placeholder="Enter Due Date"
              onChange={(e) =>
                setTask({ ...task, due_date: e.target.value })
              }
            />
            <label htmlFor="inputstatus" className="form-label">
              Status
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputstatus"
              placeholder="Enter Project Status"
              autoComplete="off"
              onChange={(e) =>
                setTask({ ...task, status: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="project" className="form-label">
              Project
            </label>
            <select name="project" id="project" className="form-select"
                onChange={(e) => setTask({...task, p_id: e.target.value})}>
                    <option value="">Select a Project</option>
              {project.map((c) => (
                <option key={c.p_id} value={c.p_id}>{c.p_name}</option>
              ))}
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="employee" className="form-label">
              Employee
            </label>
            <select name="employee" id="employee" className="form-select"
                onChange={(e) => setTask({...task, id: e.target.value})}>
              {employee.map((c) => {
                return <option key={c.id} value={c.id}>{c.name}</option>;
              })}
            </select>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
Task