"use client";

import { useEffect } from "react";
import type { IOptions, RecursivePartial } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import { colors } from "@/constants/colors";

const particlesOptions: RecursivePartial<IOptions> = {
  autoPlay: true,
  background: {
    color: {
      value: colors.black,
    },
  },
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  detectRetina: true,
  fpsLimit: 120,
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: { enable: true },
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
        factor: 100,
        speed: 1,
        maxSpeed: 50,
        easing: "ease-out-quad",
      },
      push: {
        quantity: 4,
      },
    },
  },
  particles: {
    color: {
      value: colors.white,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: {
        min: 1,
        max: 3,
      },
      animation: {
        count: 0,
        enable: false,
        speed: 4,
        decay: 0,
        sync: false,
        destroy: "none",
        startValue: "random",
      },
    },
    number: {
      density: {
        enable: true,
        width: 1920,
        height: 1080,
      },
      limit: { value: 400 },
      value: 200,
    },
    collisions: {
      absorb: {
        speed: 2,
      },
      bounce: {
        horizontal: {
          value: 1,
        },
        vertical: {
          value: 1,
        },
      },
      enable: false,
      mode: "bounce",
      overlap: {
        enable: true,
        retries: 0,
      },
    },
    move: {
      angle: {
        offset: 0,
        value: 90,
      },
      attract: {
        distance: 200,
        enable: false,
        rotate: {
          x: 600,
          y: 600,
        },
      },
      decay: 0,

      direction: "none",
      drift: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: false,
        inverse: false,
        maxSpeed: 50,
      },
      path: {
        clamp: true,
        delay: {
          value: 0,
        },
        enable: false,
      },
      outModes: {
        default: "out",
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      random: true,
      size: false,
      speed: 1,
      spin: {
        acceleration: 0,
        enable: false,
      },
      straight: false,
      trail: {
        enable: false,
        length: 10,
      },
      vibrate: false,
      warp: false,
    },
    opacity: {
      value: {
        min: 0,
        max: 1,
      },
      animation: {
        count: 0,
        enable: true,
        speed: 1,
        decay: 0,
        sync: false,
        destroy: "none",
        startValue: "random",
      },
    },
    reduceDuplicates: false,
    zIndex: {
      value: 0,
      opacityRate: 1,
      sizeRate: 1,
      velocityRate: 1,
    },
    life: {
      count: 0,
      delay: {
        random: {
          enable: false,
          min: 0,
        },
        value: 0,
        sync: false,
      },
      duration: {
        random: {
          enable: false,
          min: 0.0001,
        },
        value: 0,
        sync: false,
      },
    },
    destroy: {
      mode: "none",
      split: {
        count: 1,
        factor: {
          random: {
            enable: false,
            min: 0,
          },
          value: 3,
        },
        rate: {
          random: {
            enable: false,
            min: 0,
          },
          value: {
            min: 4,
            max: 9,
          },
        },
        sizeOffset: true,
      },
    },
    twinkle: {
      lines: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
      particles: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
};

export default function Background() {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  return (
    <div className="relative z-0">
      <Particles options={particlesOptions} className={"fixed inset-0 h-full w-full"} />
    </div>
  );
}
