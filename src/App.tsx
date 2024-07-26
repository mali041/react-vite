import Presentation from "./components/Presentational";
import Container from "./components/Container";

const App: React.FC = () => {
  const data = [{ name: "Item 1" }, { name: "Item 2" }];

  return (
    <Container data={data}>
      {(data) =>
        data.map((item, index) => <Presentation key={index} item={item} />)
      }
    </Container>
  );
};

export default App;
