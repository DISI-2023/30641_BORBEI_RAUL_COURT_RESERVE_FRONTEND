import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={{ display: "inline-flex" }}>
      <div style={{ marginLeft: "2.5em", marginTop: "2.5em", maxWidth: "40em", marginRight: "4em" }}>
        <Carousel infiniteLoop="true" thumbWidth="7em" stopOnHover="true">
          <div>
            <img src="field1.jpeg" />
          </div>
          <div>
            <img src="field2.jpg" />
          </div>
          <div>
            <img src="field3.jpg" />
          </div>
        </Carousel>
      </div>
      {
        localStorage.getItem("isAdmin") !== "true" ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ maxWidth: "50em", marginRight: "2em" }}>
              <p style={{
                color: "#94BBE9",
                marginTop: "0.5em",
                fontWeight: "bolder",
                fontSize: "50px",
                textAlign: "center",
                textShadow: "-2px 1px 0px #AEEEB1"
              }}>
                Welcome to Court Reserve!
              </p>
              <p style={{
                color: "#7999BF",
                marginTop: "0.5em",
                fontWeight: "normal",
                fontSize: "20px",
                textAlign: "center",
                textShadow: "-2px 1px 0px #AEEEB1"
              }}>
                Court Reserve is a top-notch website for booking tennis court reservations. It connects users with tennis facilities and allows them to easily reserve court time. Learn more about how to book tennis fields and other features of the Court Reserve website.
              </p>
            </div>
            <div style={{ display: "inline-flex", margin: "auto" }}>
              <Link to="/fields">
                <button className='myButton'>
                  Fields
                </button>
              </Link>
              <Link to="/locations">
                <button className='myButton'>
                  Locations
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ maxWidth: "50em", marginRight: "2em" }}>
              <p style={{
                color: "#94BBE9",
                marginTop: "0.5em",
                fontWeight: "bolder",
                fontSize: "50px",
                textAlign: "center",
                textShadow: "-2px 1px 0px #AEEEB1"
              }}>
                Welcome, {localStorage.getItem("username")}!
              </p>
            </div>
              <Link to="/fields" style={{marginBottom: "1em", marginTop: "3em", marginLeft: "-1em"}}>
                <button className='myButton'>
                  Fields
                </button>
              </Link>
              <Link to="/locations" style={{marginBottom: "1em", marginLeft: "-1em"}}>
                <button className='myButton'>
                  Locations
                </button>
              </Link>
          </div>
        )
      }


    </div>
  )

}

export default HomePage;