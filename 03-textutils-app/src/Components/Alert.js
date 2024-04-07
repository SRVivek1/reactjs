import React from "react";

export default function Alert(props) {
  /**
   * Capitalize the word.
   *
   * @param {*} word
   * @returns
   */
  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  };
  return (
    props.alert && 
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)} : </strong> {props.alert.msg}
        
        {/* Removed close button from alert window. */}
        {/* <span
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </span> */}
      </div>
    );
}
