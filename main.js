import './assets/scss/all.scss';

console.log('Hello world');

document.addEventListener("DOMContentLoaded", function() {
  if (window.innerWidth < 767) {
    // 先移除指定區塊的 data-aos
    document.querySelectorAll(".aos-md-disable [data-aos]").forEach(function(el) {
      el.removeAttribute("data-aos");
    });
  }

  // 再初始化 AOS
  AOS.init({
  offset: 120,
  duration: 800,
  once: false,
  delay: 0,
});
});