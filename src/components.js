import React from "react";
import { TwitterIcon, GithubIcon } from "./icons";

// Item component.
export const Item = ({ color, width, height, title, remove }) => (
  <div className={`item h${height} w${width} ${color}`}>
    <div className="item-content">
      <div className="card">
        <div className="card-title">{title}</div>
        <div className="card-remove">
          <i className="material-icons" onMouseDown={remove}>
            &#xE5CD;
          </i>
        </div>
      </div>
    </div>
  </div>
);

// Tweet component.
export const Tweet = ({
  tweet,
  color = "blue",
  width = "3",
  height = "2",
  image,
  title,
  remove,
}) => (
  // <div className={`item h${height} w${width} ${color}`}>
  <div className="item" style={{ width: "200px", height: "auto" }}>
    <div className="item-content">
      <div className="card">
        <div
          style={{
            display: "flex",
          }}
          className="content"
        >
          <div className="user-message">
            <div className="user-image-container">
              <img src={image} className="user-image" />
            </div>
            <div className="tweet">{tweet}</div>
          </div>

          <div className="icon">
            <TwitterIcon />
          </div>
        </div>
        <div className="card-remove">
          <i className="material-icons" onMouseDown={remove}>
            &#xE5CD;
          </i>
        </div>
      </div>
    </div>
  </div>
);

// Commit component.
export const Commit = ({
  issueId,
  title,
  status,
  devName,
  devMergeCount,
  image,
  commitTime,
  remove,
}) => (
  <div className="item" style={{ width: "200px", height: "auto" }}>
    <div className="item-content">
      <div className="card">
        <div
          style={{
            display: "flex",
          }}
          className="content"
        >
          <div className="user-message">
            <div className="user-image-container">
              <img src={image} className="user-image" />
            </div>
            <div className="tweet">{title}</div>
          </div>

          <div className="icon">
            <GithubIcon />
          </div>
        </div>
        <div className="card-remove">
          <i className="material-icons" onMouseDown={remove}>
            &#xE5CD;
          </i>
        </div>
      </div>
    </div>
  </div>
);

// Select component.
export const Select = ({ values, onChange }) => (
  <div className="control">
    <div className="control-icon">
      <i className="material-icons">&#xE152;</i>
    </div>
    <div className="select-arrow">
      <i className="material-icons">&#xE313;</i>
    </div>
    <select
      className="control-field filter-field form-control"
      onChange={onChange}
      defaultValue={values[0][0]}
    >
      {values.map(([text, value], i) => (
        <option key={i} value={value}>
          {text}
        </option>
      ))}
    </select>
  </div>
);

// Button component.
export const Button = ({ onClick }) => (
  <button className="add-more-items btn btn-primary" onClick={onClick}>
    <i className="material-icons">&#xE145;</i>
    Add more items
  </button>
);

// Header component.
export const Header = ({ children }) => (
  <React.Fragment>
    <h2 className="section-title">
      <span>Grid demo</span>
    </h2>
    <div className="controls cf">{children}</div>
  </React.Fragment>
);

// Footer component.
export const Footer = ({ children }) => (
  <div className="grid-footer">{children}</div>
);

// Demo component.
export const Demo = ({ children }) => (
  <section className="grid-demo">{children}</section>
);
