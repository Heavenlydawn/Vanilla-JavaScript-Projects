const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    // Remove Active from other buttons
    btns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    // Hide other article
    articles.forEach((article) => {
      article.classList.remove("active");
    });
    const els = document.getElementById(id);
    els.classList.add("active");
  }
});
