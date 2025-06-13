function showHealthHoroscope() {
  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  if (name === "" || dob === "") {
    alert("Please fill out all fields.");
    return;
  }
  const healthMessages = [
    "Today is a great day to focus on your mental well-being.",
    "Watch out for minor aches — stay hydrated and stretch!",
    "Your energy levels will be high; make time for exercise.",
    "Take a break and get some fresh air to recharge.",
    "Eat fresh fruits and avoid stress — you'll feel great!",
    "Stay positive, your body reflects your mindset."
  ];
  const randomIndex = Math.floor(Math.random() * healthMessages.length);
  const message = healthMessages[randomIndex];
  const zodiacSign = getZodiacSign(new Date(dob));
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
    <p><b>Hello, ${name}!</b></p>
    <p><b>Born on: </b>${dob}</p>
    <p>Your health horoscope for today is:</p>
    <img src="${zodiacSign.toLowerCase()}.png" alt="${zodiacSign}" style="width: 120px; height: 120px; margin-top: 15px;">
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