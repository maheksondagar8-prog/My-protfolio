import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => ({
    background: {
      color: { value: "rgba(9, 134, 162, 1)" },
    },
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    fpsLimit: 120,
    particles: {
      color: { value: "#ffffff" },
      links: {
        enable: true,
        color: "#ffffff",
        distance: 150,
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: MoveDirection.none,
        outModes: { default: OutMode.out },
      },
      number: {
        value: 80,
        density: { enable: true },
      },
      opacity: { value: 0.5 },
      size: { value: { min: 1, max: 5 } },
      shape: { type: "circle" },
    },
    detectRetina: true,
  }), []);

  if (!init) return null;

  return <Particles id="tsparticles" options={options} />;
};

export default ParticlesBackground;
