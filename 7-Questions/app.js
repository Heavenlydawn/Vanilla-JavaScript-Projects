// 1st Option
// traversing the dom
// const questionBtns = document.querySelectorAll(".question-btn");
// questionBtns.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
// });
// });

// 2nd Option
//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", () => {
    question.classList.toggle("show-text");
  });
});
