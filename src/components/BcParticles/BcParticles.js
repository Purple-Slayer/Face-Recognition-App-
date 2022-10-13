import './BcParticles.css';

import React, { useCallback } from 'react';

import Particles from "react-particles";
import { loadFull } from "tsparticles";




const BcParticles = () => {
      
   
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        
        await loadFull(engine);
      }, []);
      const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
      }, []);
   return(
    <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
      background: {
        color: {
          value: "",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "none",
          },
          onHover: {
            enable: true,
            mode: "none",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 1,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#e600e6",
        },
        links: {
          color: "#e600e6",
          distance: 170,
          enable: true,
          opacity: 0.6,
          width: 0.6,
        },
        collisions: {
          enable: true,
        },
        move: {
          directions: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 100,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }}
  /> )
};

export default BcParticles;