import React, { useState } from "react";
import "./ClickHandler.css"; // Importing the CSS file for styling

const ClickHandler: React.FC = () => {
  const [clickCount, setClickCount] = useState<number>(0);

  const handleEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
    switch (event.type) {
      case "click":
        setClickCount((prevCount) => prevCount + 1);
        console.log(`Clicked! Total clicks: ${clickCount + 1}`);
        break;
      case "dblclick":
        alert("Double-clicked!");
        break;
      default:
        console.log("Unhandled event", event.type);
    }
  };

  return (
    <div className="click-handler-container">
      <button
        onClick={handleEvent}
        onDoubleClick={handleEvent}
        className="click-button"
      >
        Click Me!
      </button>
      <p>Total Clicks: {clickCount}</p>
    </div>
  );
};

export default ClickHandler;
