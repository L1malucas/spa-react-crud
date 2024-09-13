import React from 'react';

const Header = () => {
  return (
    <header style={{ padding: '10px', backgroundColor: '#fff' }}>
      <h1>Employee Management Software</h1>
      <button style={{ marginRight: '10px' }}>Add Employee</button>
      <button>Logout</button>
    </header>
  );
};

export default Header;
