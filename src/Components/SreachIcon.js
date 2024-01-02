import React, { useEffect, useState } from "react";
import "./SearchIcon.css";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import { Link } from "react-router-dom";
import axios from "axios";
function SreachIcon(item) {
  const [data, setData] = useState([{ image: "" }]);

  useEffect(() => {
    axios

      .get("https://pintrest-server.onrender.com/api/createImage")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has on error"));
  });

  return (
    <div className="SearchIcon">
      <input
        className="search_cols"
        type="search"
        placeholder="Search for ideas"
      />
      <CameraAltOutlinedIcon />
      <Link to="/createImage">
        <button className="create-photo" type="button">
          Create
        </button>
      </Link>
      <br></br>
      <br></br>
      <br></br>

      {data.map((singleData) => {
        if (singleData.image) {
          const base64String = btoa(
            String.fromCharCode(...new Uint32Array(singleData.image.data.data))
          );
          return (
            <div key={item._id}>
              <img
                className="getImages"
                src={`data:image/png;base64,${base64String}`}
                alt="img"
              />
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default SreachIcon;
