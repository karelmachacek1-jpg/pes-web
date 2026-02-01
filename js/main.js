// Mobilní menu
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector("#navMenu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// Modal galerie
const modal = document.querySelector("#modal");
const modalImg = document.querySelector("#modalImg");
const thumbs = document.querySelectorAll(".thumb");
const closeEls = document.querySelectorAll("[data-close]");

function openModal(src, alt) {
  if (!modal || !modalImg) return;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  modalImg.src = src;
  modalImg.alt = alt || "Zvětšená fotka psa";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (!modal || !modalImg) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  modalImg.src = "";
  modalImg.alt = "";
  document.body.style.overflow = "";
}

thumbs.forEach((btn) => {
  btn.addEventListener("click", () => {
    const img = btn.querySelector("img");
    openModal(btn.dataset.full, img?.alt);
  });
});

closeEls.forEach((el) => el.addEventListener("click", closeModal));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// Rok ve footeru
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();