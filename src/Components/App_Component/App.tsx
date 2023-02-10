import React, { useState } from "react";

import Navbar from "../Navbar/navbar.component";
import Greet from "../Greet_Component/greet.component";
import InputField from "../Input_Field/input_field.component";
import OpenTasks from "../OpenTasks_Component/openTasks.component";
import TaskList from "../Task_List/task_list.component";
import CompletedTasks from "../CompletedTasks_Component/completedTasks.component";
import Footer from "../Footer/footer.component";
import { Task } from "../../task_model";

import "./App.scss";

const App = () => {
  const [todo, setTodo] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
  const [invalidTask, setInvalidTask] = useState(false);

  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();

    if (tasks && todo.length > 0) {
      setTasks([...tasks, { id: Date.now(), todo, isCompleted: false }]);
      setTodo("");
      setInvalidTask(false);
    } else {
      setInvalidTask(true);
      setTimeout(() => {
        setInvalidTask(false);
      }, 3000);
    }
  };

  return (
    <div className="app-container">
      <Navbar />
      <Greet />
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd}
        invalidTask={invalidTask}
      />
      <OpenTasks tasks={tasks} />
      <div className="tasks">
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          completedTasks={completedTasks}
          setCompletedTasks={setCompletedTasks}
        />
        <CompletedTasks
          setCompletedTasks={setCompletedTasks}
          completedTasks={completedTasks}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
