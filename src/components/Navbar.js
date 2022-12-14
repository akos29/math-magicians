import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [active, setActive] = useState('Home');
  const handleChange = (e) => {
    setActive(e.target.innerHTML);
  };

  useEffect(() => {
    console.log('first');
  }, [active]);

  return (
    <div>
      <nav>
        <ul>
          <li><NavLink to="/" onClick={handleChange} className={active === 'Home' ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/calculator" onClick={handleChange} className={active === 'Calculator' ? 'active' : ''}>Calculator</NavLink></li>
          <li><NavLink to="/quote" onClick={handleChange} className={active === 'Quote' ? 'active' : ''}>Quote</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
