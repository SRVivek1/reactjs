import React, { useState } from "react";
import PropTypes from "prop-types";

import "./TextForm.css";

export default function TextForm(props) {
  /**
   * Update text to upper case.
   */
  const handleUcClicked = () => {
    let uppercase = text.toUpperCase();
    setFormattedText(uppercase);
  };

  /**
   * Update text to lower case.
   */
  const handleLoClicked = () => {
    let uppercase = text.toLowerCase();
    setFormattedText(uppercase);
  };

  /**
   * Inverse the text.
   */
  const handleInClicked = () => {
    let newText = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newText = newText + text[i];
    }
    setFormattedText(newText);
  };

  /**
   * Sentance case the text.
   */
  const handleScClicked = () => {
    let newText = "";
    let t = text.split(".");
    for (let i = 0; i < t.length; i++) {
      let x = t[i].trim();
      console.log(x);
      newText =
        newText + x.charAt(0).toUpperCase() + x.substring(1).toLowerCase();
      if (i !== t.length - 1) {
        newText += ". ";
      }
    }
    setFormattedText(newText);
  };

  /**
   * Capitalize first letter of each word.
   */
  const handleCcClicked = () => {
    let newText = "";
    let t = text.split(/\s+/);
    for (let i = 0; i < t.length; i++) {
      newText +=
        t[i].trim().charAt(0).toUpperCase() +
        t[i].substring(1).toLocaleLowerCase() +
        " ";
    }
    setFormattedText(newText);
  };

  /**
   * Alternate capilize.
   */
  const handleAcClicked = () => {
    let newText = "";
    let t = text.split("");
    for (let i = 0; i < t.length; ) {
      newText += t[i].toUpperCase();
      if (i !== t.length - 1) {
        newText += t[i + 1].toLocaleLowerCase();
      }
      i += 2;
    }
    setFormattedText(newText);
  };

  /**
   * Update text box with new user input.
   *
   */
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  /**
   * Clear default text when user clicks.
   *
   */
  const handleClearTextArea = (event) => {
    setText("");
    setFormattedText("");
  };

  /**
   * Copy the formatted text to clipboard.
   */
  const handleCopyToClipboardClicked = () => {
    navigator.clipboard.writeText(formattedtext);
    props.showAlert("Formatted text copied to clipboard", "success");
  };

  /**
   * Remove Extra spaces.
   */
  const handleRemoveExtraSpaces = () => {
    let newText = text.replace(/\s+/g, " ");
    setFormattedText(newText);
  };

  /**
   * useState is a react hook.
   */
  const defText = "Enter text here...";
  const [text, setText] = useState(defText);
  const [formattedtext, setFormattedText] = useState(defText);

  const textAreaStyle = {
    backgroundColor: props.mode === "dark" ? "grey" : "white",
    color: props.mode === "dark" ? "white" : "black",
    border: "1px solid skyblue",
  };

  const labelStyle = {
    color: props.mode === "dark" ? "white" : "black",
  };

  return (
    <>
      <div>
        <h3 style={labelStyle}>{props.heading}</h3>
        <div className="form-group row my-2">
          <textarea
            className="form-control mx-2 col align-self-start"
            id="mytextbox"
            value={text}
            onChange={handleOnChange}
            rows="10"
            style={textAreaStyle}
          ></textarea>

          <textarea
            className="form-control mx-2 col align-self-end"
            id="outputtextbox"
            value={formattedtext}
            rows="10"
            style={textAreaStyle}
            disabled
          ></textarea>
        </div>
        <div className="bth-group">
          <button
            className="btn btn-primary btn-sm mx-1"
            onClick={handleClearTextArea}
          >
            Clear Text
          </button>
          <button
            className="btn btn-primary btn-sm mx-1"
            onClick={handleCopyToClipboardClicked}
          >
            Copy to Clipboard
          </button>

          <button
            className="btn btn-primary btn-sm mx-1"
            onClick={handleRemoveExtraSpaces}
          >
            Remove Extra Spaces
          </button>
          <button
            className="btn btn-primary btn-sm mx-1"
            onClick={handleUcClicked}
          >
            Upper case
          </button>
          <button
            className="btn btn-primary btn-sm mx-1"
            onClick={handleLoClicked}
          >
            Lower case
          </button>
          <button
            className="btn btn-primary btn-sm mx-1"
            onClick={handleInClicked}
          >
            Inverse text
          </button>
          <button
            className="btn btn-primary btn-sm mx-1"
            onClick={handleScClicked}
          >
            Sentence text
          </button>
          <button
            className="btn btn-primary btn-sm mx-1"
            onClick={handleCcClicked}
          >
            Capitalize text
          </button>
          <button
            className="btn btn-primary btn-sm mx-1"
            onClick={handleAcClicked}
          >
            aLtErNaTiNg CaSe
          </button>
        </div>
      </div>

      {/* Text analysis */}
      <div className="container my-3 row" style={labelStyle}>
        <div className="container col">
          <h3>Your text summary</h3>
          <p>
            <b>Words : </b>
            {text.trim() === "" ? 0 : text.trim().split(" ").length}. <br />
            <b>Characters : </b>
            {text.length}. <br />
            <b>Type Time : </b>
            {(text.trim() === "" ? 0 : text.trim().split(" ").length * 1.5) / 60} minutes (average).
          </p>
        </div>
        <div className="container col">
          <h4>Preview</h4>
          <p>
            {text.length > 0 && text !== defText
              ? text
              : "No context to preview."}
          </p>
        </div>
      </div>
    </>
  );
}

TextForm.prototype = { heading: PropTypes.string };

TextForm.defaultProps = { heading: "Text box heading goes here" };
