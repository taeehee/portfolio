$(function(){
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".envelope-wrap",
    start: "top 80%",
    end: "bottom 40%",
    scrub: true,
  }
});

// 1. 닫힌 봉투에서 뚜껑 열리기
tl.to(".envelope-flap", {
  rotationX: -180,
  transformOrigin: "top center",
  duration: 1,
  ease: "power2.inOut"
})


// 2. 편지 올라오기
/* 이전 애니메이션 종료 시점 0.4초 전에, 요소를 1.2초 동안 
부드럽게(power2.out) 위로 180픽셀 이동시키는 애니메이션을 실행 */
.to(".letter", {
  opacity: 1, /* 투명도:불투명 */
  y: -260, /* y축만큼 이동 */
  duration: 1.2, /* 시작부터 끝까지 완료되는 데 1.2초 */
  ease: "power2.out" /* 초반에는 빠르게 움직이다가 부드럽고 자연스럽게 속도가 줄어 */
}, "-=0.4") /* 애니메이션이 타임라인 상의 어느 시점에 시작할지 */


// 3. 열린 봉투로 전환
.to(".envelope-open", {
  opacity: 1,
  duration: 0.5
}, "-=0.5");  


});