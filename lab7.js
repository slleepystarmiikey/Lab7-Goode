console.log("JS Connected — time to DOMinate this document.");
// ===== Toggle Menu =====
const menuBtn = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");
menuBtn.addEventListener("click", () => {
const nowHidden = mainNav.classList.toggle("hidden");
menuBtn.setAttribute("aria-expanded", String(!nowHidden));
});
// ===== Theme Switcher =====
const lightBtn = document.getElementById("lightBtn");
const darkBtn = document.getElementById("darkBtn");
const brandBtn = document.getElementById("brandBtn");
function clearThemes() {
document.body.classList.remove("theme-dark", "theme-brand");
}
lightBtn.addEventListener("click", () => clearThemes());
darkBtn.addEventListener("click", () => {
clearThemes();
document.body.classList.add("theme-dark");
});
brandBtn.addEventListener("click", () => {
clearThemes();
document.body.classList.add("theme-brand");
});
/* =========================================================
Lab 7 – Interactive Design with Vanilla JavaScript
Part 3: Interactivity – Menu Toggle & Theme Switcher
========================================================= */

/* ===== Auto-select default theme based on device width ===== */
function applyInitialTheme() {
const isMobile = window.matchMedia("(max-width: 768px)").matches;
clearThemes(); // reset first
if (isMobile) {
document.body.classList.add("theme-dark");
} else {
// keep default light
}
}
applyInitialTheme(); // run once on load
// Re-check if user resizes between mobile & desktop
window.addEventListener("resize", () => {
if (!document.body.dataset.manualTheme) {
applyInitialTheme();
}
});
// Track manual toggle to prevent overwriting user’s choice
[lightBtn, darkBtn, brandBtn].forEach(btn => {
btn.addEventListener("click", () => {
document.body.dataset.manualTheme = "true";
});
});

// ===== Newsletter / Listserv form =====
const nlForm = document.getElementById("newsletterForm");
const nlName = document.getElementById("nlName");
const nlEmail = document.getElementById("nlEmail");
const nlFeedback = document.createElement("div");
nlFeedback.className = "feedback";
nlForm.appendChild(nlFeedback);
function isLikelyEmail(value) {
return value.includes("@") && value.includes(".") && value.indexOf("@") > 0;
}
nlForm.addEventListener("submit", (e) => {
e.preventDefault();
const name = nlName.value.trim();
const email = nlEmail.value.trim();
if (!name) {
nlFeedback.textContent = "Please enter your name.";
nlFeedback.className = "feedback error";
nlName.focus(); return;
}
if (!isLikelyEmail(email)) {
nlFeedback.textContent = "Please enter a valid email address.";
nlFeedback.className = "feedback error";
nlEmail.focus(); return;
}
nlFeedback.textContent = "Thanks! You’ve been added to the Newsletter/Listserv(demo).";
nlFeedback.className = "feedback success";
nlForm.reset();
nlFeedback.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 220 });
});

// ===== Contact Form (mailto:) =====
const ctForm = document.getElementById("contactForm");
const ctName = document.getElementById("ctName");
const ctEmail = document.getElementById("ctEmail");
const ctSubject = document.getElementById("ctSubject");
const ctMessage = document.getElementById("ctMessage");
const ctFeedback = document.createElement("div");
ctFeedback.className = "feedback";
ctForm.appendChild(ctFeedback);
// Change to your actual email address
const CONTACT_TO_ADDRESS = "you@yourdomain.edu";
ctForm.addEventListener("submit"), (e) => {
e.preventDefault();
}

const name = ctName.value.trim();
const fromEmail = ctEmail.value.trim();
const subj = ctSubject.value.trim();
const msg = ctMessage.value.trim();

if (!name) { ctFeedback.textContent = "Please enter your name.";
ctFeedback.className = "feedback error"; ctName.focus(); return; }
if (!isLikelyEmail(fromEmail)) { ctFeedback.textContent = "Please enter a validemail address."; ctFeedback.className = "feedback error"; ctEmail.focus(); return; }
if (!subj) { ctFeedback.textContent = "Please enter a subject.";
ctFeedback.className = "feedback error"; ctSubject.focus(); return; }
if (!msg) { ctFeedback.textContent = "Please enter a message."; ctFeedback.className
= "feedback error"; ctMessage.focus(); return; }
const lines = [
"New contact from website:",
"",
`Name: ${name}`,
`Email: ${fromEmail}`,
`Subject: ${subj}`,
"",
"Message:",
msg,
"",
"—",

"Sent from the Interactive Design Lab 7"
];
const body = lines.join("\n");
const mailto = `mailto:${encodeURIComponent(CONTACT_TO_ADDRESS)}`
+ `?subject=${encodeURIComponent("[Website Contact] " + subj)}`
+ `&body=${encodeURIComponent(body)}`;
window.location.href = mailto;
ctFeedback.textContent = "Opening your email client…";
ctFeedback.className = "feedback success";
ctFeedback.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 220 });
.feedback {
transition: color .3s ease, opacity .3s ease;
}




