$(function () {
  gsap.registerPlugin(ScrollTrigger);

  // 닫힌 봉투 사라짐
  gsap.fromTo(".envelope-closed",
    { opacity: 1 }, // 시작 상태
    {
      opacity: 0,   // 끝 상태
      duration: 0.5,
      scrollTrigger: {
        trigger: ".letter-scene",
        start: "top center",  // 시작 스크롤 위치
        end: "top 100px",     // 끝 스크롤 위치
        scrub: true
      }
    }
  );

  // 뚜껑 열림
  gsap.fromTo(".envelope-flap",
    { rotationX: 0, transformOrigin: "top center" }, // 닫힌 상태
    {
      rotationX: -180, // 열린 상태
      duration: 1.2,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".letter-scene",
        start: "center 50%", // 시작 위치
        end: "bottom 80%",      // 끝 위치
        scrub: true,
        pin: true
      }
    }
  );

  // 편지 올라오기
  gsap.fromTo(".letter",
    { y: 208, opacity: 0 }, // 봉투 안에 감춰진 상태
    {
      y: -150, opacity: 1,  // 위로 튀어나온 상태
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".letter-scene",
        start: "center 50%",
        end: "bottom 80%",
        scrub: true
      }
    }
  );
});
