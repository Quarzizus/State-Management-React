import { UseState } from "../components/UseState";
import { ClassState } from "../components/ClassState";
import "./styles.css";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <UseState name="UseState" />
      <ClassState name="ClassState" />
    </div>
  );
};

export { App };
