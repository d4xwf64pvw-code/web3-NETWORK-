// get elements
const form = document.getElementById("signupForm");
const loading = document.getElementById("loading");
const steps = document.querySelectorAll(".step");

// step control
let currentStep = 0;

// show correct step
function showStep(stepIndex) {
  steps.forEach((step, index) => {
    step.classList.remove("active");
    if (index === stepIndex) {
      step.classList.add("active");
    }
  });
}

// next button
function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
}

// back button
function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
}

// show first step on load
showStep(currentStep);

// submit form
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // hide signup form
  form.classList.add("hidden");

  // show loading screen
  loading.classList.remove("hidden");

  // simulate account creation
  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 3000);
});
