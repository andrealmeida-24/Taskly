import React, { ChangeEvent } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import "./input_field.styles.scss";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (event: React.FormEvent) => void;
  invalidTask: boolean;
}

const InputField = ({ todo, setTodo, handleAdd, invalidTask }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTodo(event.target.value);
  };

  return (
    <form onSubmit={handleAdd} className="formInput-container">
      <input
        type="input"
        placeholder={`Please enter a ${
          invalidTask ? "valid task" : "new task"
        }.`}
        value={todo}
        onChange={handleChange}
        className={invalidTask ? "invalid_task" : ""}
      />
      <button className="input_submit" type="submit">
        <AiOutlinePlus />
      </button>
    </form>
  );
};

export default InputField;
