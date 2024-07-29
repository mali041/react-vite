import React, { useState } from "react";

const ClickHandlerComponent: React.FC = () => {
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
    <>
      <button onClick={handleEvent} onDoubleClick={handleEvent}>
        Click Me!
      </button>
      <h5>
        {" "}
        Count: <span> {clickCount} </span>{" "}
      </h5>
    </>
  );
};

export default ClickHandlerComponent;
