import React, { useState } from 'react';
import "./styles.css";

const AddEmployee = ({ onAdd }) => {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
    salary: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...employee, id: Math.random().toString(36).substr(2, 9) });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" placeholder="First Name" value={employee.firstName} onChange={handleChange} />
      <input type="text" name="lastName" placeholder="Last Name" value={employee.lastName} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={employee.email} onChange={handleChange} />
      <input type="number" name="salary" placeholder="Salary" value={employee.salary} onChange={handleChange} />
      <input type="date" name="date" value={employee.date} onChange={handleChange} />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default AddEmployee;
