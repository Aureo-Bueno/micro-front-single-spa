import { useEffect, useState } from "react";
import { ITask } from "./@types";
import { listenEvent } from "@ab/utils";

export function App({ name }) {
  const [task, setTask] = useState<Array<ITask>>([]);

  useEffect(() => {
    listenEvent(
      "@ab/react-route/todo/add-task",
      (event: CustomEvent) => {
        setTask((oldTask) => [...oldTask, event.detail]);
      }
    );
  }, []);

  return (
    <>
      <h1>{name}</h1>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
          </tr>
        </thead>
        <tbody>
          {task.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.describe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
