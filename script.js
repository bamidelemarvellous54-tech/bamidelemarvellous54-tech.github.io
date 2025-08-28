// Run only after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {

  // ========== UPDATE YEAR ==========
  document.getElementById("year").textContent = new Date().getFullYear();

  // ========== GALLERY LIGHTBOX ==========
  const galleryImgs = document.querySelectorAll(".gallery-grid img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const closeBtn = document.querySelector(".close");

  // Open lightbox on image click
  galleryImgs.forEach((img) => {
    img.addEventListener("click", () => {
      lightbox.classList.add("show");
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
    });
  });

  // Close on button click
  closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("show");
  });

  // Close on background click
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("show");
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") lightbox.classList.remove("show");
  });
});
