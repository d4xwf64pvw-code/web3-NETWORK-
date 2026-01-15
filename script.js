// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore, doc, setDoc } 
from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
let currentStep = 0;
const steps = document.querySelectorAll(".step");

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle("active", i === index);
  });
}

function nextStep() {
  if (currentStep < steps.length - 2) {
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

function createAccount() {
  currentStep++;
  showStep(currentStep);

  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 2000);
}

showStep(currentStep);
// DASHBOARD FAKE BALANCE ANIMATION
const balances = document.querySelectorAll("[data-balance]");

balances.forEach(balance => {
  setInterval(() => {
    let value = parseFloat(balance.innerText.replace(/[^0-9.-]+/g,""));
    let change = (Math.random() * 200 - 100).toFixed(2);
    let newValue = value + parseFloat(change);

    balance.innerText =
      (newValue >= 0 ? "+$" : "-$") +
      Math.abs(newValue).toFixed(2);

    balance.style.color = newValue >= 0 ? "#00ff99" : "#ff4d4d";
  }, 3000);
});

// LOGOUT
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    window.location.href = "login.html";
  });
}
