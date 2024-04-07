import "./TextForm.css";
import React, { useState } from "react";
import PropTypes from "prop-types";

const TextForm = (props) => {
  const defaultText = "Enter text here...";

  const [text, setText] = useState(defaultText);
  const [formattedText, setFormattedText] = useState(defaultText);

  /**
   * Update text with new user input
   */
  const inputTextChangeHandler = (event) => {
    setText(event.target.value);
  };

  /**
   * Clear content of text areas
   */
  const clearTextareas = () => {
    setText("");
    setFormattedText("");
    props.alert("Text cleared.", "success");
  };

  /**
   * Copy to clipboard
   */
  const copyToClipboard = () => {
    navigator.clipboard.writeText(formattedText);
    props.alert("Copied to clipboard.", "success");
  };

  /**
   * Update input text with formatted text
   */
  const updateInputText = () => {
    setText(formattedText);
    props.alert("Formatted text copied to source.", "success");
  };

  /**
   * Transform the text in sentence case.
   */
  const transformInSentenceCase = () => {
    let resp = "";
    const tmp = text.trim().split(".");

    for (let i = 0; i < tmp.length; i++) {
      resp += tmp[i].charAt(0).toUpperCase() + tmp[i].slice(1).toLowerCase();
      if (i < tmp.length - 1) {
        resp += ". ";
      }
    }
    setFormattedText(resp);
    props.alert("Tramsformed to sentence case.", "success");
  };

  /**
   * Capitalize all letters.
   */
  const capitalizeAllLetters = () => {
    setFormattedText(text.toUpperCase());
    props.alert("All letters capitalize.", "success");
  };

  /**
   * Lower case all letters.
   */
  const lowercaseAllLetters = () => {
    setFormattedText(text.toLowerCase());
    props.alert("All letters changed to lower case.", "success");
  };

  /**
   * Altercase lower and upper case.
   */
  const alternateCapitalize = () => {
    let resp = "";
    const chars = text.trim().split("");
    for (let i = 0; i < text.trim().length; ) {
      resp += chars[i].toLowerCase();

      if (i != text.trim().length - 1) {
        resp += chars[i + 1].toUpperCase();
      }
      i += 2;
    }
    setFormattedText(resp);
    props.alert("Letters changed to alternate case.", "success");
  };

  /**
   * Remove unwanted extra spaces.
   */
  const removeUnwantedSpaces = () => {
    setFormattedText(text.trim().replace(/\s+/g, " "));
    props.alert("Text cleaned.", "success");
  };

  const textareaStyle = {
    backgroundColor: props.mode === "dark" ? "#484553" : "white",
    color: props.mode === "dark" ? "white" : "black",
    border: props.mode === "dark" ? "1px solid red" : "1px solid skyblue",
  };

  return (
    <div className="container">
      <h2>
        Try Textutils - word counter, character counter, remove exra-spaces
      </h2>
      <div className="form-group row my-2 my-1">
        <textarea
          className="form-control mx-2 my-1 col align-self-start"
          id="inputTextArea"
          rows="8"
          value={text}
          onChange={inputTextChangeHandler}
          style={textareaStyle}
        ></textarea>
        <textarea
          className="form-control mx-2 my-1 col align-self-center"
          id="resultTextArea"
          rows="8"
          disabled
          value={formattedText}
          style={textareaStyle}
        ></textarea>
      </div>
      <div className="btn-groups my-3">
        <button
          type="button"
          className="btn btn-primary btn-sm mx-1 my-1"
          onClick={clearTextareas}
        >
          Clear
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm mx-1 my-1"
          onClick={copyToClipboard}
          disabled={text.trim().length === 0}
        >
          Copy to clipboard
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm mx-1 my-1"
          onClick={updateInputText}
          disabled={text.trim().length === 0}
        >
          Update input
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm mx-1 my-1"
          onClick={transformInSentenceCase}
          disabled={text.trim().length === 0}
        >
          Sentence Case
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm mx-1 my-1"
          onClick={capitalizeAllLetters}
          disabled={text.trim().length === 0}
        >
          Capitalize
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm mx-1 my-1"
          onClick={lowercaseAllLetters}
          disabled={text.trim().length === 0}
        >
          Lowercase
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm mx-1 my-1"
          onClick={alternateCapitalize}
          disabled={text.trim().length === 0}
        >
          aLtErNaTe
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm mx-1 my-1"
          onClick={removeUnwantedSpaces}
          disabled={text.trim().length === 0}
        >
          Clean Text
        </button>
      </div>
      <div className="row my-2">
        <div className="col align-self-start">
          <b>Words : </b>
          {text.trim() === "" ? 0 : text.trim().split(" ").length}
          <br />
          <b>Characters : </b>
          {text.trim() === "" ? 0 : text.trim().split("").length}
          <br />
          <b>Typing time : </b>
          {text.trim() === ""
            ? 0
            : (text.trim().split(" ").length * 1.5) / 60}{" "}
          minutes{" "}
          <span>
            <i>(40 wpm).</i>
          </span>
        </div>
        <div className="col align-self-start">
          <h3>Preview</h3>
          <p>
            {formattedText.trim() === ""
              ? "Nothing to preview..."
              : formattedText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextForm;

TextForm.prototype = {};
