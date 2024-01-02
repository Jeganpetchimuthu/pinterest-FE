import React, { useEffect, useState } from "react";
import "./imgs1.css";
import axios from "axios";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
function Imgs5(item) {
  const [data, setData] = useState([{ image: "" }]);
  const [iconColor, setIconColor] = useState("black");

  const handleButtonClick = () => {
    // Change the color when the button is clicked
    setIconColor(iconColor === "black" ? "red" : "black");
  };

  useEffect(() => {
    axios
      .get("https://pintrest-server.onrender.com/api/img4")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has on error"));
  });
  return (
    <div className="Home-components">
      {data.map((singleData) => {
        if (singleData.image) {
          const base64String = btoa(
            String.fromCharCode(...new Uint32Array(singleData.image.data.data))
          );
          return (
            <div key={item._id}>
              <img
                className="img1"
                width={"400px"}
                height={"400px"}
                src={`data:image/png;base64,${base64String}`}
                alt="img"
              />
            </div>
          );
        } else {
          return null;
        }
      })}
      <div className="download">
        <FavoriteBorderIcon
          onClick={handleButtonClick}
          className="likeIcon"
          style={{ color: iconColor }}
        />

        <span className="view">View</span>
        <Link to="/save">
          <span className="save">Save</span>
        </Link>
      </div>
    </div>
  );
}

export default Imgs5;
