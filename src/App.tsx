import DataProvider from "./components/DataProvider";

const App: React.FC = () => {
  const data = ["Item 1", "Item 2", "Item 3"];

  return (
    <DataProvider data={data}>
      {(data) =>
        data.map((item, index) => (
          <div key={index} className="item">
            {item}
          </div>
        ))
      }
    </DataProvider>
  );
};

export default App;
