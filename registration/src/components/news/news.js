// import React, { useEffect, useState } from 'react';

// function News() {
//   const [data, setData] = useState({ text: '', image: '' });

//   useEffect(() => {
//     fetch('http://localhost:9000/homePage')
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//       });
//   }, []);

//   return (
//     <div>
//       <p>{data.text}</p>
//       <img src={`data:image/jpeg;base64,${data.image}`} alt="img" />
//     </div>
//   );
// }

// export default News;


import React from "react";
//import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/Art.jpg";
import Navbar from "../navbar/Navbar";
import {useHistory} from "react-router-dom"


//import { FiArrowRight } from "react-icons/fi";

const Home = () => {

  const history = useHistory()
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        {/* <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div> */}
        <div className="home-text-section">
          <h1 className="primary-heading">
            Shopping Experience Revolutionised
          </h1>
          <p className="primary-text">
            Everyone's a fan of Shoppping Right? Bringing to you ShopSmart
            Experience a completely new way of shooping
          </p>
          <div className="myButtons">
            <button className="secondary-button" onClick={() => history.push("/register")}>
              <>Signup</>
              {/* Order Now <FiArrowRight />{" "} */}
            </button>
            <button className="secondary-button sec1" onClick={() => history.push("/login")}>
              <>Login</>
              {/* Order Now <FiArrowRight />{" "} */}
            </button>
          </div>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;