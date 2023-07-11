import React from "react";

const Button = ({ css, event, text, isDisabled }) => {
  return (
    <button className={css} onClick={event} disabled={isDisabled}>
      {text}
    </button>
  );
};

export default Button;
