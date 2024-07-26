import DataDisplay from "./components/DataDisplay";
import withLoading from "./components/WithLoading";

const DataDisplayWithLoading = withLoading(DataDisplay);

const App: React.FC = () => (
  <DataDisplayWithLoading isLoading={true} data="Hello, World!" />
);

export default App;
