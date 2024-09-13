import React from "react";

const EmployeeRow = ({ index, employee, onDelete, onEdit }) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.email}</td>
      <td>${employee.salary.toLocaleString()}</td>
      <td>{employee.date}</td>
      <td>
        <button onClick={() => onEdit(employee)}>Edit</button>
        <button onClick={() => onDelete(employee)}>Delete</button>
      </td>
    </tr>
  );
};

export default EmployeeRow;
