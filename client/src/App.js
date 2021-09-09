import React, { useState, useEffect } from "react";
import "./App.css";
import Loader from "./components/loader/loader.component";
import Uploader from "./components/uploader/uploader.component";

function App() {
  const [files, setFiles] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (files) {
      setLoader(true);
      const formData = new FormData();

      formData.append("file-input", files);

      fetch("/", {
        method: "post",
        body: formData,
      }).catch(console.error);
      setLoader(false);
    }
  }, [files]);

  return (
    <div className="App">
      {files ? <Loader /> : <Uploader setFiles={setFiles} />}
    </div>
  );
}

export default App;
