import React from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import TaskCompleted from "../Task/task_completed.component";

import { Task } from "../../../task_model";

import "./accordion.styles.scss";

interface Props {
  accordionShow: boolean;
  setAccordionShow: React.Dispatch<React.SetStateAction<boolean>>;
  completedTasks: Task[];
  setCompletedTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const Accordion = ({
  accordionShow,
  setAccordionShow,
  completedTasks,
  setCompletedTasks,
}: Props) => {
  const toogleAccordion = () => {
    setAccordionShow(!accordionShow);
  };

  const clearAllCompletedTasks = () => {
    setCompletedTasks([]);
  };

  return (
    <div className="accordion-wrapper">
      <div className="accordion-header" onClick={toogleAccordion}>
        <p>
          Completed tasks <span>{`(${completedTasks.length})`}</span>
        </p>
        {accordionShow ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {accordionShow
        ? completedTasks.map((task) => (
            <TaskCompleted key={task.id} todo={task.todo} />
          ))
        : null}
      {completedTasks.length > 0 && accordionShow ? (
        <span className="clearAll-text" onClick={clearAllCompletedTasks}>
          Clear All
        </span>
      ) : null}
    </div>
  );
};

export default Accordion;
