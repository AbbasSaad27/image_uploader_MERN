import React, { useState, useEffect } from "react";
import "./App.css";
import Uploader from "./components/uploader/uploader.component";

function App() {
  const [files, setFiles] = useState(null);

  useEffect(() => {
    if (files) {
      const formData = new FormData();

      formData.append("file-input", files);

      fetch("/", {
        method: "post",
        body: formData,
      }).catch(console.error);
    }
  }, [files]);

  return (
    <div className="App">{files ? null : <Uploader setFiles={setFiles} />}</div>
  );
}

export default App;
