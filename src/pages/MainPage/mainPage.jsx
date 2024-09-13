import React, { useEffect, useState } from "react";
import EmployeeList from "../../components/Employee/list";
import data from "../../mock/data.json";
const MainPage = () => {
  const [employees, setEmployees] = useState(data);

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
    fetchData();
  }, [employees]);
  return (
    <div>
      <EmployeeList employees={employees} />
    </div>
  );
};

export default MainPage;
