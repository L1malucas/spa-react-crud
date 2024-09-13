import React from "react";

import "./loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-animation">
        <div className="loading-item">💻</div> 
        <div className="loading-item">🖱️</div>
        <div className="loading-item">📊</div> 
        <div className="loading-item">🔧</div> 
      </div>
      <p>Carregando...</p>
    </div>
  );
};

export default Loading;
