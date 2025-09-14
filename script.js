// -------- Image Slider (Home Page) --------
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if(i === index) slide.classList.add("active");
  });
}

document.getElementById("prevBtn")?.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
});

document.getElementById("nextBtn")?.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
});

// -------- Contact Form Validation --------
const contactForm = document.getElementById("contactForm");
if(contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    let errors = [];
    if(name === "") errors.push("Name is required");
    if(email === "" || !email.includes("@")) errors.push("Valid email is required");
    if(message === "") errors.push("Message cannot be empty");

    if(errors.length > 0) {
      formMessage.textContent = errors.join(", ");
      formMessage.style.color = "red";
    } else {
      formMessage.textContent = "Form submitted successfully!";
      formMessage.style.color = "green";
      contactForm.reset();
    }
  });
}
