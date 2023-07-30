import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddTasks() {
  const [data, setData] = useState({
    name: '',
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(data);
    axios
      .post('http://localhost:8081/createTask', data)
      .then((res) => {
        navigate('/tasks');
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex flex-column align-items-center pt-4">
      <h2>Add Task</h2>
      <form className="row g-3 w-50" onSubmit={handleSubmit}>
        <div className="col-12">
          <label htmlFor="inputName" className="form-label">
            Task Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Enter Name"
            autoComplete="off"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTasks;
