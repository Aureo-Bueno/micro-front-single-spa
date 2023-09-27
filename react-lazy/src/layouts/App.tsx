import { Link } from "react-router-dom";
import { ILayout } from "./types";

export function Layout({ children }: ILayout) {
  return (
    <main>
      <h1>@ab/react-multiples</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      {children}
    </main>
  );
}
