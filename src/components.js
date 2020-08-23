import React from "react";
import { TwitterIcon } from "./icons";

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
  <div className={`item h${height} w${width} ${color}`}>
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
              <img
                src={image}
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "999px",
                  boxShadow: "rgba(0, 0, 0, 0.02) 0px 0px 2px inset",
                }}
              />
            </div>
            <div
              style={{
                border: "2px solid",
                fontStyle: "italic",
                padding: "10px",
                boxShadow: "5px 10px",
              }}
            >
              {tweet}
            </div>
          </div>

          <div
            style={{
              fontSize: "2rem",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
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
