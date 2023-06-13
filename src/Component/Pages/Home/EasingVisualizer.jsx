import React, { useEffect, useRef } from "react";
import anime from "animejs";

const EasingVisualizer = () => {
  const easingVisualizerRef = useRef(null);

  useEffect(() => {
    const easingVisualizerEl = easingVisualizerRef.current;
    const barsWrapperEl = easingVisualizerEl.querySelector(".bars-wrapper");
    const dotsWrapperEl = easingVisualizerEl.querySelector(".dots-wrapper");
    const numberOfBars = 91;
    const duration = 450;
    let animation;

    fitElementToParent(easingVisualizerEl, 0);

    for (let i = 0; i < numberOfBars; i++) {
      const barEl = document.createElement("div");
      const dotEl = document.createElement("div");
      barEl.classList.add("bar");
      dotEl.classList.add("dot");
      dotEl.classList.add("color-red");
      barsWrapperEl.appendChild(barEl);
      dotsWrapperEl.appendChild(dotEl);
    }

    function play() {
      const easings = Object.keys(anime.easings);
      const ease = easings[Math.floor(Math.random() * easings.length)];

      animation = anime.timeline({
        duration: duration,
        easing: ease,
        complete: play,
      })
      .add({
        targets: '.easing-visualizer .bar',
        scaleY: anime.stagger([1, 44], { easing: ease, from: 'center', direction: 'reverse' }),
        delay: anime.stagger(7, { from: 'center' })
      })
      .add({
        targets: '.easing-visualizer .dot',
        translateY: anime.stagger(['-160px', '160px'], { easing: ease, from: 'last' }),
        delay: anime.stagger(7, { from: 'center' })
      }, 0);
    }

    play();

    // Clean up animation when the component is unmounted
    return () => {
      if (animation) {
        animation.pause();
        animation = null;
      }
    };
  }, []);

  // Helper function to fit the element to its parent
  function fitElementToParent(el, padding) {
    let timeout = null;

    function resize() {
      if (timeout) clearTimeout(timeout);
      anime.set(el, { scale: 1 });
      const pad = padding || 0;
      const parentEl = el.parentNode;
      const elOffsetWidth = el.offsetWidth - pad;
      const parentOffsetWidth = parentEl.offsetWidth;
      const ratio = parentOffsetWidth / elOffsetWidth;
      timeout = setTimeout(() => anime.set(el, { scale: ratio }), 10);
    }

    resize();
    window.addEventListener("resize", resize);
  }

  return (
    <div className="animation-wrapper" ref={easingVisualizerRef}>
      <div className="feature-animation">
        <div className="easing-visualizer">
          <div className="wrapper bars-wrapper"></div>
          <div className="wrapper dots-wrapper"></div>
        </div>
      </div>
    </div>
  );
};

export default EasingVisualizer;
