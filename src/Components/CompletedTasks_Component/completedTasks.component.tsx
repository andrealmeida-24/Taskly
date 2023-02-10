import React, { useState } from "react";
import { Task } from "../../task_model";
import Accordion from "./Accordion/accordion.component";
import "./completedTasks.styles.scss";

interface Props {
  completedTasks: Task[];
  setCompletedTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const CompletedTasks = ({ completedTasks, setCompletedTasks }: Props) => {
  const [accordionShow, setAccordionShow] = useState(false);

  return (
    <div className="completedTasks-container">
      <Accordion
        accordionShow={accordionShow}
        setAccordionShow={setAccordionShow}
        completedTasks={completedTasks}
        setCompletedTasks={setCompletedTasks}
      />
    </div>
  );
};

export default CompletedTasks;
