import React from "react";

import TaskComponent from "../Task/task.component";

import { Task } from "../../task_model";

import "./task_list.styles.scss";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  completedTasks: Task[];
  setCompletedTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList = ({
  tasks,
  setTasks,
  completedTasks,
  setCompletedTasks,
}: Props) => {
  const clearAllUncompletedTasks = () => {
    setTasks([]);
  };

  return (
    <div className="taskList-container">
      {tasks.map((task) => (
        <TaskComponent
          key={task.id}
          task={task}
          tasks={tasks}
          setTasks={setTasks}
          completedTasks={completedTasks}
          setCompletedTasks={setCompletedTasks}
        />
      ))}
      {tasks.length > 0 ? (
        <p onClick={clearAllUncompletedTasks}>Clear All</p>
      ) : null}
    </div>
  );
};

export default TaskList;
