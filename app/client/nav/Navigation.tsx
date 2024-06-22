import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/nav.scss";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/reg')}>Registration</button>
      <button onClick={() => navigate('/about')}>About</button>
    </nav>
  );
};

export default Navigation;
