import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 100, clear: "both", paddingTop: 30, textAlign: "center", marginTop: 20 }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
