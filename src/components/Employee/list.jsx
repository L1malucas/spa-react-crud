import React from "react";
import EmployeeRow from "./row";
import "./styles.css";
const EmployeeList = ({ employees }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Salary</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <EmployeeRow
            key={employee.id}
            index={index + 1}
            employee={employee}
          />
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeList;
