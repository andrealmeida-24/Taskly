import React, { useState, ChangeEvent } from "react";
import { BsCheckCircleFill, BsFillTrashFill } from "react-icons/bs";

import { Task } from "../../task_model";

import "./task.styles.scss";

interface Props {
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  completedTasks: Task[];
  setCompletedTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskComponent = ({
  task,
  tasks,
  setTasks,
  completedTasks,
  setCompletedTasks,
}: Props) => {
  const [editMode, setEditMode] = useState(false);
  const [editTask, setEditTask] = useState(task.todo);

  const handleDone = (id: number, todo: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
    setCompletedTasks([...completedTasks, task]);
    handleDelete(id);
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEditMode = () => {
    if (!editMode && !task.isCompleted) {
      setEditMode(!editMode);
    }
  };

  const handleEditTask = (event: ChangeEvent<HTMLInputElement>) => {
    setEditTask(event.target.value);
  };

  const handleEditForm = (event: React.FormEvent, id: number) => {
    event.preventDefault();
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, todo: editTask } : task))
    );
    setEditMode(false);
  };

  return (
    <div className="form-container">
      <form
        className="task"
        onSubmit={(event) => handleEditForm(event, task.id)}
      >
        <BsCheckCircleFill
          className="icon"
          onClick={() => handleDone(task.id, task.todo)}
        />
        <div className="task_text" onClick={handleEditMode}>
          {editMode ? (
            <input onChange={(e) => handleEditTask(e)}></input>
          ) : (
            <span>{task.todo}</span>
          )}
        </div>

        <BsFillTrashFill
          className="delete_icon"
          onClick={() => handleDelete(task.id)}
        />
      </form>
    </div>
  );
};

export default TaskComponent;
