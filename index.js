const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentSlide = 0;
let big = document.querySelector(".imb_big")
let minis = document.querySelectorAll(".imb_mini")

minis.forEach(item => {
  item.addEventListener("click", () => {
    big.src = item.src
  })
})
window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM pronto");
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  console.log("toggle:", toggle);
  console.log("menu:", menu);

  if (!toggle || !menu) {
    console.error("Elemento(s) não encontrado(s)!");
    return;
  }

  toggle.addEventListener("click", () => {
    console.log("Botão clicado");
    menu.classList.toggle("show");
  });
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });


});



