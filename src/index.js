import "./styles.css";

const rate1 = document.getElementById("rating-1");
const rate2 = document.getElementById("rating-2");
const rate3 = document.getElementById("rating-3");
const rate4 = document.getElementById("rating-4");
const rate5 = document.getElementById("rating-5");
const submitBtn = document.getElementById("submit");
const selectedRating = document.getElementById("selected-rating");
const reviewSection = document.getElementById("review-section");
const thankYouSection = document.getElementById("thank-you-section");

rate1.addEventListener("click", function () {
  selectedRating.textContent = "You selected 1 out of 5";
});
rate2.addEventListener("click", function () {
  selectedRating.textContent = "You selected 2 out of 5";
});
rate3.addEventListener("click", function () {
  selectedRating.textContent = "You selected 3 out of 5";
});
rate4.addEventListener("click", function () {
  selectedRating.textContent = "You selected 4 out of 5";
});
rate5.addEventListener("click", function () {
  selectedRating.textContent = "You selected 5 out of 5";
});

submitBtn.addEventListener("click", function () {
  thankYouSection.style.display = "block";
  reviewSection.style.display = "none";
});
