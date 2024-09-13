import React from 'react';
import "./styles.css";

const EmployeeRow = ({ index, employee }) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.email}</td>
      <td>${employee.salary.toLocaleString()}</td>
      <td>{employee.date}</td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default EmployeeRow;
