import React, { useEffect, useState } from "react";
import "./Img.css";
import axios from "axios";
import { Link } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import Image from "./Image/baby.jpg";
function Image9(item) {
  const [data, setData] = useState([{ image: "" }]);

  useEffect(() => {
    axios
      .get("https://pintrest-server.onrender.com/api/img9")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has on error"));
  });
  return (
    <div className="HomeImage-components">
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
                height={"500px"}
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
          <p className="content">Beautiful Cats</p>
        </span>
        <span>
          <Link to="/img10">
            <MoreHorizIcon className="more" />
          </Link>
        </span>
      </span>
    </div>
  );
}

export default Image9;
