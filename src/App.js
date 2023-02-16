import Popup from "./components/Popup";
import { useState, useEffect } from "react";
function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [timePopup, setTimePopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimePopup(true);
    }, 5000);
  }, []);

  return (
    <div className="App">
      <main>
        <h1>React popup</h1>
        <br />
        <button onClick={() => setShowPopup(true)}>Open popup</button>
      </main>
      <Popup trigger={showPopup} setTrigger={setShowPopup}>
        <h2>my button popup</h2>
        <p>This is my button triggered popup</p>
      </Popup>
      <Popup trigger={timePopup} setTrigger={setTimePopup}>
        <h2>my timed popup</h2>
        <p>This is my time triggered popup</p>
      </Popup>
    </div>
  );
}

export default App;
