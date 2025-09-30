window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(() => loader.style.display = "none", 1000);
});

gsap.from(".animate-text", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 1
});

gsap.from(".animate-text-delay", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 1.5
});

