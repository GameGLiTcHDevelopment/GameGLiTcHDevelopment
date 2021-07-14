import React, { useState, useEffect } from "react";
import "./about.css";
import channellogo from "../../EndImage.png";

function Example() {
  // Declare a new state variable, which we'll call "count"
  //   const [count, setCount] = useState(0);

  //   // Similar to componentDidMount and componentDidUpdate:
  //   useEffect(() => {
  //     // Update the document title using the browser API
  //     document.title = `You clicked ${count} times`;
  //   }, [count]);
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `About`;
  });

  return (
    // <div>
    //   <p>You clicked {count} times</p>
    //   <button onClick={() => setCount(count + 1)}>Click me</button>
    // </div>
    <div
      style={
        {
          // height: "95vh",
          // scrollSnapType: "y mandatory",
          // overflowY: "scroll",
        }
      }
    >
      <div
        className='section'
        style={{
          height: "95vh",
          //   margin: "2rem 0",
          display: "flex",
          alignItems: "center",
          //   justifyContent: "space-between",
          //   borderRadius: "2rem",
          background: "#40b0d6",
          // backgroundImage: `url(${channellogo})`,
          //   alignItems: "center",
          //   transform: `translateX(${show.itemOne ? "0" : "-100vw"})`,
          //   transition: "transform 1s",
        }}
      >
        <img src={channellogo} alt='image' style={{ height: "100%" }} />
        <div
          style={{
            width: "50%",
            color: "white",
            textAlign: "center",
            margin: "0",
            padding: "5rem",
          }}
        >
          <h1 style={{ fontSize: "4rem", textDecoration: "underline" }}>
            About GameGLiTcH Development
          </h1>
          <h2 style={{ fontSize: "2rem" }}>
            Game Glitch Development is dedicated to providing you the most
            in-depth tutorials. Whether you want to be a full time indie game
            developer or are just wanting to make games in your spare time. Just
            head over the tutorials section and get started today.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Example;
