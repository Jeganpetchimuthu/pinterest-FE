import React, { useState, useEffect } from "react";

import Navication from "./Components/Navication";
import Home from "./Components/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Profile from "./Components/Profile";
import Message from "./Components/Message";
import Explore from "./Components/Explore";
import SreachIcon from "./Components/SreachIcon";
import Setting from "./Components/Components_Profile/Setting";
import UserProfie from "./Components/Account_Components/UserProfie";
import PublicProfile from "./Components/Account_Components/PublicProfile";
import Logout from "./Components/Account_Components/Logout";
import AddAccount from "./Components/Account_Components/AddAccount";
import Mail from "./Components/Mail";
import HomeImage from "./HomeImage";
import Imgs1 from "./ImageComponents/Imgs1";
import Save from "./ImageComponents/Save";
import Imgs2 from "./ImageComponents/Imgs2";
import Imgs3 from "./ImageComponents/Imgs3";
import Imgs4 from "./ImageComponents/Imgs4";
import Imgs5 from "./ImageComponents/Imgs5";
import Imgs6 from "./ImageComponents/Imgs6";
import Imgs7 from "./ImageComponents/Imgs7";
import Imgs8 from "./ImageComponents/Imgs8";
import Imgs9 from "./ImageComponents/Imgs9";
import Imgs10 from "./ImageComponents/Imgs10";
import Singup from "./Singup";
import CreateImage from "./Components/CreateImage";
import Imgs11 from "./ImageComponents/Imgs11";

export default function App() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowImage(true);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      {showImage ? (
        <Router>
          <Routes>
            <Route exact path="/" element={<Singup />} />
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/search" element={<SreachIcon />} />
            <Route exact path="/explore" element={<Explore />} />
            <Route exact path="/message" element={<Message />} />
            <Route exact path="/mail" element={<Mail />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/setting" element={<Setting />} />
            <Route exact path="/user" element={<UserProfie />} />
            <Route exact path="/public-Profile" element={<PublicProfile />} />
            <Route exact path="/add-accont" element={<AddAccount />} />
            <Route exact path="/logout" element={<Logout />} />
            <Route exact path="/img1" element={<Imgs1 />} />
            <Route exact path="/img2" element={<Imgs2 />} />
            <Route exact path="/img3" element={<Imgs3 />} />
            <Route exact path="/img4" element={<Imgs4 />} />
            <Route exact path="/img5" element={<Imgs5 />} />
            <Route exact path="/img6" element={<Imgs6 />} />
            <Route exact path="/img7" element={<Imgs7 />} />
            <Route exact path="/img8" element={<Imgs8 />} />
            <Route exact path="/img9" element={<Imgs9 />} />
            <Route exact path="/img10" element={<Imgs10 />} />
            <Route exact path="/img11" element={<Imgs11 />} />
            <Route exact path="/save" element={<Save />} />
            <Route exact path="/createImage" element={<CreateImage />} />
          </Routes>
          <Navication />
        </Router>
      ) : (
        <HomeImage />
      )}
    </div>
  );
}
