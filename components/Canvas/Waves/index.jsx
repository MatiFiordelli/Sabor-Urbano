import React, { useRef, useEffect } from "react";

export default function Waves({ waveTotal=10, waveHeight=100, waveSpeed=0.8, defaultColor="", flattenDuration=3, ...props}) {
  const { devicePixelRatio: ratio = 1 } = window;

  const contextRef = useRef(null);
  const canvasRef = useRef(null);
  const nodesRef = useRef(null);

  const setWaveNodes = () => {
    const offSetNodes = waveTotal + 2;
    return [...Array(offSetNodes)].map((_, index) => [
      ((index - 1) * window.innerWidth) / waveTotal,
      0,
      Math.random() * waveHeight,
      waveSpeed
    ]);
  };

  nodesRef.current = setWaveNodes();

  function drawWave() {
    const wave = nodesRef.current;
    const ctx = contextRef.current;

    const diff = function (a, b) {
      return (b - a) / 2 + a;
    };

    // Wave gradient
    const gradient = ctx.createRadialGradient(100, 0, 500, 100, 250, 15);
    gradient.addColorStop(0, "#0373FF");
    gradient.addColorStop(0.45, "#050F63");
    gradient.addColorStop(1, "#060A33");
    
    ctx.fillStyle = defaultColor || gradient;

    ctx.beginPath();
    ctx.moveTo(0, ctx.canvas.height);

    // First  wave node
    ctx.lineTo(wave[0][0], wave[0][1]);

    for (var i = 0; i < wave.length; i++) {
      if (wave[i + 1]) {
        ctx.quadraticCurveTo(
          wave[i][0],
          wave[i][1],
          diff(wave[i][0], wave[i + 1][0]),
          diff(wave[i][1], wave[i + 1][1])
        );
      } else {
        // Last wave node
        ctx.lineTo(wave[i][0], wave[i][1]);
        ctx.lineTo(window.innerWidth, ctx.canvas.height);
      }
    }
    ctx.closePath();
    ctx.fill();
  }

  const draw = () => {
    const ctx = contextRef.current;

    ctx.clearRect(0, 0, window.innerWidth, contextRef.current.canvas.height);

    // Update nodesRef
    // [0] node x pos
    // [1] node y pos
    // [2] node strength
    // [3] node speed

    nodesRef.current = nodesRef.current.map((node, index) => [
      node[0],
      (alturaActual / 2) * Math.sin(node[2] / 15) +
        ctx.canvas.height / (2 * ratio) -
        (ctx.canvas.height / ratio) * 0.45 +
        alturaActual,
      node[2] + node[3],
      node[3]
    ]);

    drawWave();
  };

  let flattenDurationRestante = flattenDuration;
  let alturaActual = waveHeight;

  function updateAltura() {
    const decremento = waveHeight / (flattenDuration * 60); // 60 es el número de frames por segundo
    alturaActual -= decremento;
    flattenDurationRestante -= 1 / 60;
    if (flattenDurationRestante <= 0) {
      alturaActual = 0;
    }
  }

  function resizeCanvasToDisplaySize(canvas) {
    const { width } = canvasRef.current.getBoundingClientRect();

    if (window.innerWidth !== width) {
      const { devicePixelRatio: ratio = 1 } = window;

      canvasRef.current.width = window.innerWidth * ratio;
      canvasRef.current.height = waveHeight * ratio;
      contextRef.current.scale(ratio, ratio);

      nodesRef.current = nodesRef.current.map((node, index) => [
        ((index - 1) * window.innerWidth) / waveTotal,
        node[1],
        node[2],
        node[3]
      ]);
    }

    return false;
  }

  function sizeCanvas() {
    const { width, height } = canvasRef.current.getBoundingClientRect();

    if (
      canvasRef.current.width !== width ||
      canvasRef.current.height !== height
    ) {
      const { devicePixelRatio: ratio = 1 } = window;
      canvasRef.current.width = width * ratio;
      canvasRef.current.height = height * ratio;
      contextRef.current.scale(ratio, ratio);
      return true;
    }

    return false;
  }

  useEffect(() => {
    // Set up canvas
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Set context ref
    contextRef.current = context;
  },  useEffect(() => {
    // Set up canvas
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Set context ref
    contextRef.current = context;

    // Size canvas with devicePixelRatio
    sizeCanvas();
  }, []))

  useEffect(() => {
    let animationFrameId;

    //Animation frame
    const render = () => {
      updateAltura();
      draw();
      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    window.addEventListener("resize", resizeCanvasToDisplaySize);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvasToDisplaySize);
    };
  }, []);

  return (
    <canvas
      style={{
        display: "block",
        width: "100vw",
        height: "200px"
      }}
      ref={canvasRef}
      {...props}
    />
  );
}