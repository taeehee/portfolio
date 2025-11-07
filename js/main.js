$(function () {
  // GSAP 플러그인 등록
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

  // --- 기존 편지 애니메이션 (TL1) ---
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".letter-scene",
      start: "top top",
      end: "bottom 0%",
      scrub: true,
      pin: true,
      markers: false
    }
  });

  tl.fromTo(".envelope-closed", { opacity: 1 }, { opacity: 0, duration: 0.5 })
    .fromTo(".envelope-flap", { rotationX: 0, transformOrigin: "top center" }, { rotationX: -180, duration: 1.5, ease: "power2.inOut", zIndex: 1 })
    .fromTo(".letter", { transformOrigin: "top 90%", opacity: 1 }, { y: -210, opacity: 1, duration: 1.5, ease: "power2.out" });
  // ------------------------------------

 

  /* 새 시작 */

  gsap.registerPlugin(MotionPathPlugin);

gsap.to("#robin", {
  duration: 4,
  motionPath: {
    path: [
      { x: 900, y: 100 },
      { x: 700, y: 100 },
      { x: 500, y: 100 },
      { x: 300, y: 100 },
      { x: 100, y: 180 }
    ],
    curviness: 1.25
  },
  ease: "power1.inOut",
  repeat: -1,
  repeatDelay: 1.5
});

  /* 새 끝 */
  
});