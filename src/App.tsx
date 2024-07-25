import React from "react";
import Card from "./components/Card";
import Welcome from "./components/Welcome";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Card title="Welcome Card">
        <Welcome name="React Developer" />
        <p>This is the content inside the card!</p>
      </Card>
    </div>
  );
};

export default App;
