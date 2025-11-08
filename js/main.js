$(function () {

  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

  // 편지 애니메이션 (타임라인1)
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".letter_section",
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
  // 편지 애니메이션end (타임라인1)


  gsap.registerPlugin(ScrollTrigger);
let revealAnimations = [];

// Scroll
const lenis = new Lenis({
  lerp: 0.07
});

lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

// Reveal
document.querySelectorAll('.reveal').forEach(text => {
  // Split text
  let splitText = new SplitType(text, {
    type: 'words'
  })

  // Animation
  const section = text.closest('section');
  gsap.from(splitText.words, {
    opacity: 0,
    ease: 'none',
    stagger: 1,
    duration: 5,
    scrollTrigger: {
      trigger: section,
      start: 'top top', 
      end: () => `+=${window.innerHeight * 5}px`,
      scrub: true,
      // markers: true,
      pin: true,
    }
  })
})
//reveal text효과 end







  // 새 애니메이션 (타임라인2)
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
  // 새 애니메이션end (타임라인2)


  /* 새가 편지를 물고 날아감 */
  gsap.registerPlugin(ScrollTrigger);

  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".envelope-scene",
      start: "top center",
      end: "bottom center",
      scrub: true,
      pin: true, // 한 화면 고정
      anticipatePin: 1,
    }
  });

  // 1️⃣ 봉투 뚜껑 열리기
  tl3.fromTo(".envelope-flap",
    { rotationX: 0, transformOrigin: "top center" },
    {
      rotationX: -180,
      duration: 1.2,
      ease: "power2.inOut"
    }
  )

  // 2️⃣ 편지지가 봉투 안에서 위로 나옴
  .fromTo(".letter",
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: -120,
      duration: 1.5,
      ease: "power2.out"
    },
    "-=0.6"
  )

  // 3️⃣ 새 등장 + 날아가기
  .to(".bird-wrap", {
    opacity: 1,
    duration: 0.5
  })
  // 비행 경로 수정: x를 110vw에서 80vw로 줄이고, y도 -10vh로 유지하여 화면 안에 머물게 함
  .to(".bird-wrap", {
    x: "80vw", // 화면 오른쪽으로 이동하는 거리
    y: "-10vh", // 약간 위로 올라가는 높이
    rotation: 10,
    duration: 2.5,
    ease: "power1.inOut",
    onComplete: function() {
      // 화면 밖으로 완전히 나가지 않도록 onComplete의 opacity: 0 제거
      // gsap.to(".bird-wrap", { opacity: 0, duration: 0.5 });
    }
  }, "-=0.5");


  
  
});