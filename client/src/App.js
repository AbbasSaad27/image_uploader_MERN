import React, { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/loader/loader.component";
import Uploader from "./components/uploader/uploader.component";

function App() {
  const [files, setFiles] = useState(null);
  // const [loader, setLoader] = useState(false);
  // const [imgLink, setImgLink] = useState(null);
  const [uploadObj, setUploadObj] = useState({ imgLink: null, loader: false });

  useEffect(() => {
    if (files) {
      setUploadObj({ imgLink: null, loader: true });
      const formData = new FormData();

      formData.append("file-input", files);

      fetch("https://image-upload-mern-api.herokuapp.com/", {
        method: "post",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) =>
          setUploadObj({ imgLink: data.image.imageAccessLink, loader: false })
        )
        .catch(console.error);
    }
  }, [files]);

  if (!files) {
    return (
      <div className="App">
        <Uploader setFiles={setFiles} />
      </div>
    );
  }
  if (uploadObj.loader) {
    return (
      <div className="App">
        <Loader />
      </div>
    );
  }
  if (uploadObj.imgLink) {
    return (
      <div className="App">
        <Uploader imgSrc={uploadObj.imgLink} />
      </div>
    );
  }
  return <div></div>;
}

export default App;
