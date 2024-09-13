import React, { useState } from 'react';
import EmployeeList from '../../components/Employee/list';
import AddEmployee from '../../components/Employee/add';

const MainPage = () => {
  const [employees, setEmployees] = useState([
    { id: 1, firstName: 'Susan', lastName: 'Jordon', email: 'susan@example.com', salary: 95000, date: '2019-04-11' },
    { id: 2, firstName: 'Adrienne', lastName: 'Doak', email: 'adrienne@example.com', salary: 80000, date: '2019-04-17' },
    // carregar dados de json mockado
  ]);

  const handleAddEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  return (
    <div>
      <AddEmployee onAdd={handleAddEmployee} />
      <EmployeeList employees={employees} />
    </div>
  );
};

export default MainPage;
