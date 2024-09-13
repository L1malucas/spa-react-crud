import React, { useState } from "react";
import "./styles.css";

const AddEmployee = ({ onAdd }) => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    salary: "",
    date: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !employee.firstName ||
      !employee.lastName ||
      !employee.email ||
      !employee.salary ||
      !employee.date
    ) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    if (typeof onAdd === "function") {
      onAdd({ ...employee, id: Math.random().toString(36).substr(2, 9) });

      setEmployee({
        firstName: "",
        lastName: "",
        email: "",
        salary: "",
        date: "",
      });

      setError("");
    } else {
      console.error("onAdd is not a function");
      setError("Erro ao adicionar funcionário. Por favor, tente novamente.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-employee-form">
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={employee.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={employee.lastName}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={employee.email}
        onChange={handleChange}
      />
      <input
        type="number"
        name="salary"
        placeholder="Salary"
        value={employee.salary}
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        value={employee.date}
        onChange={handleChange}
      />
      <button type="submit">Add Employee</button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default AddEmployee;
