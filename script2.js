function showPersonalHoroscope() {
  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const zodiac = document.getElementById("zodiac").value;

  if (!name || !dob || !zodiac) {
    alert("Please fill out all fields.");
    return;
  }

  const horoscopes = {
    Aries: "Today brings opportunities for bold action and confidence.",
    Taurus: "A calm and steady approach will win the day.",
    Gemini: "Expect lively conversations and unexpected connections.",
    Cancer: "Family and emotions play an important role today.",
    Leo: "Your charisma will light up any room you enter.",
    Virgo: "Details matter — pay attention and you’ll thrive.",
    Libra: "Balance between your heart and mind brings peace.",
    Scorpio: "Trust your instincts when making big decisions.",
    Sagittarius: "Adventure is calling — but stay responsible.",
    Capricorn: "Dedication pays off — your hard work is noticed.",
    Aquarius: "Original ideas will gain appreciation.",
    Pisces: "Listen to your emotions and express them clearly."
  };

  const message = horoscopes[zodiac] || "Stay positive and embrace opportunities today!";
  const imagePath = `${zodiac.toLowerCase()}.png`;

  document.getElementById("personalResult").innerHTML = `
    <h3 style="font-size: 20px;">Hello, ${name}!</h3>
    <p><strong>Date of Birth:</strong> ${dob}</p>
    <p><strong>Zodiac Sign:</strong> ${zodiac}</p>
    <img src="${imagePath}" alt="${zodiac} Symbol" style="width: 100px; display: block; margin: 15px auto; border-radius: 10px;"/>
    <p style="margin-top: 15px;"><strong>Your Horoscope:</strong> ${message}</p>
  `;
}