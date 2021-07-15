import React, {
  useEffect,
  // useLayoutEffect, useRef, useState
} from "react";
import { tutorialData } from "../../data/tutorialData";
// import logo from "../../logo.svg";

function Home() {
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Home`;
  });

  return (
    <div
    // style={
    //   {
    //     height: "95vh",
    //     scrollSnapType: "y mandatory",
    //     overflowY: "scroll",
    //   }
    // }
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
      {tutorialData.map((data, key) => {
        return (
          <div className={`tutorialSections ${data.color}`} key={key}>
            <div className='tutorialText'>
              <h1>{data.header}</h1>
              <h2>{data.text}</h2>
              <button className={`${data.buttonColor} effect effect-3`}>
                More Info
              </button>
            </div>
            <div className='tutorialVideos'>
              <iframe
                width='560'
                height='315'
                src={`https://www.youtube.com/embed/${data.video}`}
                title='YouTube video player'
                frameBorder='10'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
