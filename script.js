document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm_password").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  alert("Account created successfully!");
  window.location.href = "login.html";
});

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const emailInput = document.getElementById("loginEmail").value.trim();
  const passwordInput = document.getElementById("loginPassword").value;

  const storedEmail = localStorage.getItem("userEmail");
  const storedPassword = localStorage.getItem("userPassword");

  if (emailInput === storedEmail && passwordInput === storedPassword) {
    document.getElementById("loginMessage").textContent = "Login successful!";
    document.getElementById("loginMessage").style.color = "green";
    setTimeout(() => {
      window.location.href = "home.html"; 
    }, 1000);
  } 
  else {
    document.getElementById("loginMessage").textContent = "Invalid email or password.";
    document.getElementById("loginMessage").style.color = "red";
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) {
    const accountMenu = document.querySelector(".nav-2 .flex > ul > li:nth-child(2) > a");
    accountMenu.innerHTML = `${loggedInUser} <i class="fas fa-angle-down"></i>`;
  }
});

function getZodiacSign(month, day) {
    const zodiacSigns = [
      { sign: "Capricorn", from: [12, 22], to: [1, 19], image: "capricorn.png" },
      { sign: "Aquarius", from: [1, 20], to: [2, 18], image: "aquarius.png" },
      { sign: "Pisces", from: [2, 19], to: [3, 20], image: "pisces.png" },
      { sign: "Aries", from: [3, 21], to: [4, 19], image: "aries.png" },
      { sign: "Taurus", from: [4, 20], to: [5, 20], image: "taurus.png" },
      { sign: "Gemini", from: [5, 21], to: [6, 20], image: "gemini.png" },
      { sign: "Cancer", from: [6, 21], to: [7, 22], image: "cancer-sign.png" },
      { sign: "Leo", from: [7, 23], to: [8, 22], image: "leo.png" },
      { sign: "Virgo", from: [8, 23], to: [9, 22], image: "virgo.png" },
      { sign: "Libra", from: [9, 23], to: [10, 22], image: "libra.png" },
      { sign: "Scorpio", from: [10, 23], to: [11, 21], image: "scorpio.png" },
      { sign: "Sagittarius", from: [11, 22], to: [12, 21], image: "sagittarius.png" }
    ];
    for (let zodiac of zodiacSigns) {
      const [fromMonth, fromDay] = zodiac.from;
      const [toMonth, toDay] = zodiac.to;
      if (
        (month === fromMonth && day >= fromDay) ||
        (month === toMonth && day <= toDay)
      ) {
        return zodiac;
      }
    }
    return zodiacSigns[0]; 
}

function showLoveHoroscope() {
  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const phone = document.getElementById("phone").value;

  if (!name || !dob || !phone) {
    alert("Please fill out all fields.");
    return;
  }

  const loveMessages = [
    "A romantic surprise is waiting for you today.",
    "New connections may spark unexpected feelings.",
    "Your heart's desires align with cosmic harmony.",
    "An old flame might resurface — be open to it.",
    "Today favors deep, honest conversations.",
    "Love blooms where least expected — keep an open heart."
  ];

  const randomIndex = Math.floor(Math.random() * loveMessages.length);
  const message = loveMessages[randomIndex];
  const zodiacSign = getZodiacSign(new Date(dob));

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
    <p><b>Hello ${name}</b>, born on <b>${dob}</b>, your love horoscope:</p>
    <img src="${zodiacSign.toLowerCase()}.png" alt="${zodiacSign}">
    <p style="margin-top: 15px; font-size: 18px; color:rgb(0, 25, 168);"><i>${message}</i></p>
  `;
}

function getZodiacSign(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;

  if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "Aquarius";
  if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "Pisces";
  if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Aries";
  if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "Taurus";
  if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "Gemini";
  if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "Cancer";
  if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "Leo";
  if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "Virgo";
  if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "Libra";
  if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "Scorpio";
  if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "Sagittarius";
  if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return "Capricorn";
}