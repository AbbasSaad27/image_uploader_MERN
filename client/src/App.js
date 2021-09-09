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

      setTimeout(() => {
        setLoader(false);
      }, 5000);
    }
  }, [files]);

  if (!files) {
    return (
      <div className="App">
        <Uploader setFiles={setFiles} />
      </div>
    );
  }
  if (loader) {
    return (
      <div className="App">
        <Loader />
      </div>
    );
  }
  if (files && !loader) {
    return (
      <div className="App">
        <Uploader imgSrc={files.name} />
        {console.log(files)}
      </div>
    );
  }
}

export default App;
