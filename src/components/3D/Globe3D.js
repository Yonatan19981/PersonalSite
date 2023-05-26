
import createGlobe from "cobe";
import "./Styles.css";
//import GlobeBackground from "./GlobeBackground";
import { useEffect, useRef, useState } from 'react';
import './Styles.css'; // import your CSS styles
import "./Background.css";
const Globe3D = () => {
  const canvasRef = useRef();
  const [canvasSize, setCanvasSize] = useState(window.innerWidth < 600 ? window.innerWidth : 600);

  useEffect(() => {
    const handleResize = () => {
      setCanvasSize(window.innerWidth < 600 ? window.innerWidth : 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: canvasSize * 2,
      height: canvasSize * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 30000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [31.0461, 34.8516], size: 0.1 }
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.0101;
      }
    });

    return () => {
      globe.destroy();
    };
  }, [canvasSize]);

  return (
    <div className="container">
      <div className="main-text">
        <h1>Yonatan Martsiano</h1>
        <p>
          The world of blockchain at your fingertips.
        </p>
        <canvas
          ref={canvasRef}
          style={{ width: canvasSize, height: canvasSize, maxWidth: "100%", aspectRatio: 1 }}
        />
      </div>
    </div>
  );
};

export default Globe3D;
