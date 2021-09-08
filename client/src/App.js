import React, { useState } from "react";
import "./App.css";
import Uploader from "./components/uploader/uploader.component";

function App() {
  const [files, setFiles] = useState(null);

  return (
    <div className="App">{files ? null : <Uploader setFiles={setFiles} />}</div>
  );
}

export default App;
