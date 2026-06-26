const root = document.documentElement;

window.addEventListener(
  "pointermove",
  (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;
    root.style.setProperty("--pointer-shift-x", `${x * 18}px`);
    root.style.setProperty("--pointer-shift-y", `${y * 14}px`);
    root.style.setProperty("--grid-shift-x", `${event.clientX * 0.025}px`);
    root.style.setProperty("--grid-shift-y", `${event.clientY * 0.025}px`);
  },
  { passive: true },
);

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
