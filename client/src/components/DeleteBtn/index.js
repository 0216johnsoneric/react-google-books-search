import React from "react";
import "./style.css";

// ...props means, spread all of the passed props onto this element
function DeleteBtn(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default DeleteBtn;
