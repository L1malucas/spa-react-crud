import React, { useEffect, useState } from "react";
import EmployeeRow from "./row";
import AddEmployee from "./add";
import DeleteEmployee from "./delete";
import "./styles.css";
import data from "../../mock/data.json";

const EmployeeList = () => {
  const [employees, setEmployees] = useState(data);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.example.com/employees");
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData(); // Corrigido para chamar a função fetchData
  }, []); // Removido a dependência de employees para evitar loop infinito

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
    setEmployeeToDelete(null);
  };

  const editEmployee = (updatedEmployee) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee
      )
    );
    setEditingEmployee(null);
  };

  const handleEditClick = (employee) => {
    setEditingEmployee(employee);
  };

  const handleDeleteClick = (employee) => {
    setEmployeeToDelete(employee);
  };

  const confirmDelete = () => {
    if (employeeToDelete) {
      deleteEmployee(employeeToDelete.id);
    }
  };

  const cancelDelete = () => {
    setEmployeeToDelete(null);
  };

  return (
    <div>
      {/* <h2>{editingEmployee ? "Edit Employee" : "Add Employee"}</h2>
      <AddEmployee
        onAdd={addEmployee}
        onEdit={editEmployee}
        editingEmployee={editingEmployee}
      /> */}
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Primeiro Nome</th>
            <th>Sobrenome</th>
            <th>Email</th>
            <th>Salário</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <EmployeeRow
              key={employee.id}
              index={index + 1}
              employee={employee}
              onDelete={handleDeleteClick}
              onEdit={handleEditClick}
            />
          ))}
        </tbody>
      </table>

      {employeeToDelete && (
        <DeleteEmployee
          employee={employeeToDelete}
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
};

export default EmployeeList;
