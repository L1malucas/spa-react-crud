import React, { useState } from "react";
import AddEmployee from "../../components/Employee/add";
import Modal from "../../components/Modal/modal"; 

const Header = ({ onAddEmployee }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddEmployee = (employee) => {
    if (typeof onAddEmployee === 'function') {
      onAddEmployee(employee);
      closeModal();
    } else {
      console.error('onAddEmployee is not a function');
    }
  };

  return (
    <header style={{ padding: "10px", backgroundColor: "#fff" }}>
      <h1>Sistema de Gerenciamento de Funcionários</h1>
      <button onClick={openModal}>Adicionar Funcionário</button>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <AddEmployee onAdd={handleAddEmployee} />
        </Modal>
      )}
    </header>
  );
};

export default Header;