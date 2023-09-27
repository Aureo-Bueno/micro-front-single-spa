import { useState } from "react";
import Parcel from "single-spa-react/parcel";
import { v4 as uuid } from "uuid";
import { emitEvent } from "@ab/utils";

export function App({ name }) {
  const [task, setTask] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    emitEvent("@ab/react-route/todo/add-task", { id: uuid(), describe: task });
    console.log("Saved!");
    setTask("");
  };

  return (
    <>
      <h1>{name}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={handleChange} />
        <button>Add</button>
      </form>
      <Parcel config={() => System.import("@ab/react-parcel") as any} />
    </>
  );
}
