import React from "react";
// import { faker } from "@faker-js/faker";

const CommentDetails = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={props.avatar} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.comment}</div>
      </div>
    </div>
  );
};

export default CommentDetails;
