import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
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

      <div
        style={{
          height: "95vh",
          //   margin: "2rem 0",
          display: "flex",
          alignItems: "center",
          //   justifyContent: "space-between",
          //   borderRadius: "2rem",
          background: "var(--secondary-color)",
          //   alignItems: "center",
          //   transform: `translateX(${show.itemThree ? "0" : "-100vw"})`,
          // transform: "translateX(0vw)",
          // transition: "transform 1s",
        }}
      >
        <div
          style={{
            color: "white",
            margin: "0",
            padding: "5rem",
            // textAlign: "left",
            width: "50%",
          }}
        >
          <h1>2D Movement Tutorial</h1>
          <h2>
            Please check out this tutorial if you want to know the ins and out
            of movement in Unity.
          </h2>
          <button
            style={{
              backgroundColor: "var(--primary-color)",
              padding: "1rem 4rem",
              fontSize: "1.4rem",
              marginTop: "1rem",
              fontFamily: "system-ui",
              fontWeight: "500",
              color: "white",
              border: "none",
              borderRadius: "1rem",
            }}
          >
            More Info
          </button>
        </div>
        <div style={{ width: "50%" }}>
          <iframe
            width='560'
            height='315'
            style={{
              width: "-webkit-fill-available",
              maxWidth: "120rem",
              height: "auto",
              margin: "0 3rem",
              aspectRatio: "16/9",
              borderColor: "lightyellow",
              //   borderWidth: "14px",
              borderStyle: "solid",
              borderRadius: "1rem",
              borderWidth: "4px",
            }}
            src='https://www.youtube.com/embed/fcKGqxUuENk'
            title='YouTube video player'
            frameBorder='10'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
        {/* <div
          style={{
            // height: "50vh",
            margin: "2rem 0",
            display: "flex",
            // justifyContent: "flex-end",
            borderRadius: "2rem",
            // background: "black",
            alignItems: "center",
          }}
        >

        </div> */}
      </div>
      <div
        style={{
          height: "95vh",
          //   margin: "2rem 0",
          display: "flex",
          alignItems: "center",
          //   justifyContent: "space-between",
          //   borderRadius: "2rem",
          background: "var(--primary-color)",
          //   alignItems: "center",
          //   transform: `translateX(${show.itemTwo ? "0" : "-100vw"})`,
          // transform: "translateX(0vw)",
          // transition: "transform 1s",
        }}
      >
        <div
          style={{
            color: "white",
            margin: "0",
            padding: "5rem",
            // textAlign: "left",
            width: "50%",
          }}
        >
          <h1>Converting 3D to 2D Tutorial</h1>
          <h2>
            Ever wondered how to turn a 3D model into a 2D sprite? Check out
            this tutorial.
          </h2>
          <button
            style={{
              backgroundColor: "var(--third-color)",
              padding: "1rem 4rem",
              fontSize: "1.4rem",
              marginTop: "1rem",
              fontFamily: "system-ui",
              fontWeight: "500",
              color: "white",
              border: "none",
              borderRadius: "1rem",
            }}
          >
            More Info
          </button>
        </div>
        <div style={{ width: "50%" }}>
          <iframe
            width='560'
            height='315'
            style={{
              width: "-webkit-fill-available",
              maxWidth: "120rem",
              height: "auto",
              margin: "0 3rem",
              aspectRatio: "16/9",
              borderColor: "lightyellow",
              //   borderWidth: "14px",
              borderStyle: "solid",
              borderRadius: "1rem",
              borderWidth: "4px",
            }}
            src='https://www.youtube.com/embed/kALXAWSDYEo'
            title='YouTube video player'
            frameBorder='10'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
        {/* <div
          style={{
            // height: "50vh",
            margin: "2rem 0",
            display: "flex",
            // justifyContent: "flex-end",
            borderRadius: "2rem",
            // background: "black",
            alignItems: "center",
          }}
        >

        </div> */}
      </div>
      <div
        style={{
          height: "95vh",
          //   margin: "2rem 0",
          display: "flex",
          alignItems: "center",
          //   justifyContent: "space-between",
          //   borderRadius: "2rem",
          background: "var(--third-color)",
          //   alignItems: "center",
          //   transform: `translateX(${show.itemOne ? "0" : "-100vw"})`,
          // transform: "translateX(0vw)",
          // transition: "transform 1s",
        }}
      >
        <div
          style={{
            color: "white",
            margin: "0",
            padding: "5rem",
            // textAlign: "left",
            width: "50%",
          }}
        >
          <h1>2D URP Setup Tutorial</h1>
          <h2>
            Set up your first 2D project using the Universal Render Pipeline
            with this step-by-step tutorial.
          </h2>
          <button
            style={{
              backgroundColor: "var(--secondary-color)",
              padding: "1rem 4rem",
              fontSize: "1.4rem",
              marginTop: "1rem",
              fontFamily: "system-ui",
              fontWeight: "500",
              color: "white",
              border: "none",
              borderRadius: "1rem",
            }}
          >
            More Info
          </button>
        </div>
        <div style={{ width: "50%" }}>
          <iframe
            width='560'
            height='315'
            style={{
              width: "-webkit-fill-available",
              maxWidth: "120rem",
              height: "auto",
              margin: "0 3rem",
              aspectRatio: "16/9",
              borderColor: "lightyellow",
              //   borderWidth: "14px",
              borderStyle: "solid",
              borderRadius: "1rem",
              borderWidth: "4px",
            }}
            src='https://www.youtube.com/embed/qSCCQPeeuTo'
            title='YouTube video player'
            frameBorder='10'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
        {/* <div
          style={{
            // height: "50vh",
            margin: "2rem 0",
            display: "flex",
            // justifyContent: "flex-end",
            borderRadius: "2rem",
            // background: "black",
            alignItems: "center",
          }}
        >

        </div> */}
      </div>
    </div>
  );
}

export default Home;
