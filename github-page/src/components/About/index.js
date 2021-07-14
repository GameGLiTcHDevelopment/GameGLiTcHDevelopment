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
      <div className='aboutSection'>
        <img src={channellogo} alt='image' className='aboutImage' />
        <div className='aboutText'>
          <h1>About GameGLiTcH Development</h1>
          <h2>
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
