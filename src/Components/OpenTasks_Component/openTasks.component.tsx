import React from "react";
import { Task } from "../../task_model";

import "./openTasks.styles.scss";

interface Props {
  tasks: Task[];
}

const OpenTasks = ({ tasks }: Props) => {
  return (
    <div className="openTasks-container">
      <p>
        You have <span>{tasks.length}</span> uncompleted{" "}
        {tasks.length > 1 || tasks.length === 0 ? "tasks" : "task"}.
      </p>
    </div>
  );
};

export default OpenTasks;
