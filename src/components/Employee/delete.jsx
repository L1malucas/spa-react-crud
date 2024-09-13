import React from "react";
import "./styles.css";

const DeleteEmployee = ({ employee, onConfirm, onCancel }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h4>Confirmar Exclusão</h4>
        <p>Tem certeza de que deseja excluir {employee.firstName} {employee.lastName}?</p>
        <div className="modal-actions">
          <button onClick={onConfirm} className="confirm-btn">Sim, Excluir</button>
          <button onClick={onCancel} className="cancel-btn">Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteEmployee;
