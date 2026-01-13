let currentStep = 0;
const steps = document.querySelectorAll(".step");
const loading = document.getElementById("loading");
const form = document.getElementById("signupForm");

function showStep(index) {
  steps.forEach(step => step.classList.remove("active"));
  steps[index].classList.add("active");
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  form.classList.add("hidden");
  loading.classList.remove("hidden");

  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 3000);
});

showStep(currentStep);
