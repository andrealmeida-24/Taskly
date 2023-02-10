import React from "react";

import "./task_completed.styles.scss";

interface Props {
  todo: string;
}

const TaskCompleted = ({ todo }: Props) => {
  return (
    <div className="taskCompleted">
      <p>{todo}</p>
    </div>
  );
};

export default TaskCompleted;
