
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
         { location: [28.6139, 77.2090], size: 0.05 }, { location: [39.9042, 116.4074], size: 0.05 }, { location: [31.9686, 99.9018], size: 0.05 }, { location: [55.7512, 37.6184], size: 0.05 }, { location: [23.8103, 90.4125], size: 0.05 }, { location: [31.2244, 121.4759], size: 0.05 }, { location: [37.7749, -122.4194], size: 0.05 }, { location: [34.0522, -118.2437], size: 0.05 }, { location: [41.9028, 12.4964], size: 0.05 }, { location: [22.5726, 88.3639], size: 0.05 }, { location: [37.5665, 126.9780], size: 0.05 }, { location: [19.4326, -99.1332], size: 0.05 }, { location: [-6.2088, 106.8456], size: 0.05 }, { location: [33.6844, 73.0479], size: 0.05 }, { location: [41.0082, 28.9784], size: 0.05 }, { location: [-34.6037, -58.3816], size: 0.05 }, { location: [35.6892, 51.3890], size: 0.05 }, { location: [40.7128, -74.0060], size: 0.05 }, { location: [4.7109, -74.0721], size: 0.05 }, { location: [12.9716, 77.5946], size: 0.05 }, { location: [30.0444, 31.2357], size: 0.05 }, { location: [25.2769, 51.5183], size: 0.05 }, { location: [-33.4489, -70.6693], size: 0.05 }, { location: [-23.5505, -46.6333], size: 0.05 }, { location: [-22.9068, -43.1729], size: 0.05 }, { location: [23.6345, -102.5528], size: 0.05 }, { location: [55.7558, 37.6176], size: 0.05 }, { location: [-33.8688, 151.2093], size: 0.05 }, { location: [33.8886, 35.4955], size: 0.05 }
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
          Technology At Your Fingertips.
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
