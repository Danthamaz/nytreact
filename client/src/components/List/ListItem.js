import React from "react";

export const ListItem = props => (
  <div className="card my-3">
    <ul className="list-group">
      <li className="list-group-item">
        <strong>Title:</strong> {props.title}
      </li>
      <li className="list-group-item">
        <strong>Date:</strong> {props.date}
      </li>
      <li className="list-group-item">
        <a href={props.url}>
          <strong>URL: </strong>
          {props.url}
        </a>
      </li>
      <button
        className="btn btn-primary"
        onClick={() => props.deleteArticle(props.id)}
      >
        Delete
      </button>
    </ul>
  </div>
);
