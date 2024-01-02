import React, { useState } from "react";
import axios from "axios";
import "./CreateImage.css";
function CreateImage() {
  const [file, setFile] = useState();

  const handleUpload = (e) => {
    const formdata = new FormData();
    formdata.append("file", file);

    axios
      .post("https://pintrest-server.onrender.com/api/createImage", formdata)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  return (
    <div className="craeteimages">
      <input
        className="file "
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button className="img-submit" onClick={handleUpload}>
        Upload Image
      </button>
    </div>
  );
}

export default CreateImage;
