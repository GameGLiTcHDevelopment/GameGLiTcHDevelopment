import React, {
  useEffect,
  // useLayoutEffect, useRef, useState
} from "react";
// import logo from "../../logo.svg";

function Home() {
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Home`;
  });

  return (
    <div
      style={
        {
          // height: "95vh",
          // scrollSnapType: "y mandatory",
          // overflowY: "scroll",
        }
      }
    >
      {/* <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header> */}

      <div className='tutorialSections secondary-color'>
        <div className='tutorialText'>
          <h1>2D Movement Tutorial</h1>
          <h2>
            Please check out this tutorial if you want to know the ins and out
            of movement in Unity.
          </h2>
          <button className='primary-color effect effect-3'>More Info</button>
        </div>
        <div className='tutorialVideos'>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/fcKGqxUuENk'
            title='YouTube video player'
            frameBorder='10'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className='tutorialSections primary-color'>
        <div className='tutorialText'>
          <h1>Converting 3D to 2D Tutorial</h1>
          <h2>
            Ever wondered how to turn a 3D model into a 2D sprite? Check out
            this tutorial.
          </h2>
          <button className='third-color effect effect-3'>More Info</button>
        </div>
        <div className='tutorialVideos'>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/kALXAWSDYEo'
            title='YouTube video player'
            frameBorder='10'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className='tutorialSections third-color'>
        <div className='tutorialText'>
          <h1>2D URP Setup Tutorial</h1>
          <h2>
            Set up your first 2D project using the Universal Render Pipeline
            with this step-by-step tutorial.
          </h2>
          <button className='secondary-color effect effect-3'>More Info</button>
        </div>
        <div className='tutorialVideos'>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/qSCCQPeeuTo'
            title='YouTube video player'
            frameBorder='10'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Home;
