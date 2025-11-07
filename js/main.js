$(function () {
  gsap.registerPlugin(ScrollTrigger);

  // 전체 애니메이션을 위한 타임라인 생성
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".letter-scene",
      start: "top top", // .letter-scene의 상단이 뷰포트의 상단에 닿을 때 시작
      end: "bottom 0%", // .letter-scene의 하단이 뷰포트의 상단에 닿을 때 끝
      scrub: true,
      pin: true, // .letter-scene 컨테이너를 화면에 고정
      markers: true
    }
  });

  // 애니메이션 순서를 타임라인에 추가
  // 기존 애니메이션에서 pin: true 속성을 제거
  tl.fromTo(".envelope-closed",
    { opacity: 1 },
    {
      opacity: 0,
      duration: 0.5,
    },
  )
  .fromTo(".envelope-flap",
    { rotationX: 0, transformOrigin: "top center" },
    {
      rotationX: -180,
      duration: 1.5,
      ease: "power2.inOut",
      zIndex: 1,
    },
  )
  .fromTo(".letter",
    { transformOrigin: "top 90%", opacity: 1 },
    {
      y: -210, opacity: 1,
    
      duration: 1.5,
      ease: "power2.out",
    },
  );
});