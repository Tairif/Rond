// 1. Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)
// 2. Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")
// 3. Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)
const x = document.querySelector("#x");
const y = document.querySelector("#y");
// Version 1
// const c1 = document.querySelector(".c1");
// const c2 = document.querySelector(".c2");
// const c3 = document.querySelector(".c3");

// window.addEventListener("mousemove", (e) => {
//   c1.style.top = `${e.clientY}px`; //e.clientY + "px";
//   c1.style.left = e.clientX + "px";
//   c2.style.top = e.clientY + "px";
//   c2.style.left = e.clientX + "px";
//   c3.style.top = e.clientY + "px";
//   c3.style.left = e.clientX + "px";
// });

// Version 2
const circles = document.querySelectorAll(".circle");
window.addEventListener("mousemove", (e) => {
  circles.forEach((circle) => {
    circle.style.left = `${e.clientX}px`;
    circle.style.top = `${e.clientY}px`;
  });
  x.textContent = e.clientX;
  y.textContent = e.clientY;
});

