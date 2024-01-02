import React, { useEffect, useState } from "react";
import "./Img.css";
import axios from "axios";
import { Link } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import Image from "./Image/baby.jpg";
function Img1(item) {
  const [data, setData] = useState([{ image: "" }]);

  useEffect(() => {
    axios

      .get("https://pintrest-server.onrender.com/api/img")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has on error"));
  });
  return (
    <div className="HomeImage-components">
      <h3 className="img-head">Watch</h3>
      {data.map((singleData) => {
        if (singleData.image) {
          const base64String = btoa(
            String.fromCharCode(...new Uint32Array(singleData.image.data.data))
          );
          return (
            <div key={item._id}>
              <img
                className="img1"
                src={`data:image/png;base64,${base64String}`}
                alt="img"
              />
            </div>
          );
        } else {
          return null;
        }
      })}
      <span>
        <span>
          <Avatar className="Ava">
            <img className="img" src={Image} alt="avathar" />
          </Avatar>
        </span>
        <span>
          <p className="content">Walking with Dog</p>
        </span>
        <span>
          <Link to="/img1">
            <MoreHorizIcon className="more" />
          </Link>
        </span>
      </span>
    </div>
  );
}

export default Img1;
