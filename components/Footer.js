import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark text-light text-center barra-footer">
      <h5>&copy; Creador por Jhony Saenz</h5>
      <p>2022 - {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
