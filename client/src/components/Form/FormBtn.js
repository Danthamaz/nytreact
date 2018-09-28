import React from "react";

export const FormBtn = props => (
  <button {...props} className="btn-lg btn-primary mx-auto d-block">
    {props.children}
  </button>
);
