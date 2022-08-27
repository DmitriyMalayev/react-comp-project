import React from "react";
import ReactDOM from "react-dom/client";
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";

import "./style/App.css";
import { faker } from "@faker-js/faker";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails
          author="Dmitriy"
          timeAgo={faker.datatype
            .datetime()
            .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          avatar={faker.image.avatar()}
          comment="Hello my name is Dmitriy"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Raymond"
          timeAgo={faker.datatype
            .datetime()
            .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          avatar={faker.image.avatar()}
          comment="Hello my name is Raymond"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Emilya"
          timeAgo={faker.datatype
            .datetime()
            .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          avatar={faker.image.avatar()}
          comment="Hello my name is Emilya"
        />
      </ApprovalCard>
    </div>
  );
};
root.render(<App />);
