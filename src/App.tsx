import Controlled from "./components/ControlledForm";
import Uncontrolled from "./components/UncontrolledForm";

const App: React.FC = () => (
  <div>
    <h1>React Form Examples</h1>
    <h2>Uncontrolled Component</h2>
    <Uncontrolled />
    <h2>Controlled Component</h2>
    <Controlled />
  </div>
);

export default App;
