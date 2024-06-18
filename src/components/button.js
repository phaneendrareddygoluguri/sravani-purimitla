import React from "react";

function Button({ label, onClick, style }) {
  return (
    <button style={style} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
