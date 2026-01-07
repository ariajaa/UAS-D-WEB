document.addEventListener("DOMContentLoaded", function () {

  function getGreeting() {
    const hour = new Date().getHours();

    if (hour >= 5 && hour <= 11) {
      return "Selamat Pagi";
    } else if (hour >= 12 && hour <= 14) {
      return "Selamat Siang";
    } else if (hour >= 15 && hour <= 17) {
      return "Selamat Sore";
    } else {
      return "Selamat Malam";
    }
  }

  const greetingEl = document.getElementById("greeting");

  if (greetingEl) {
    greetingEl.textContent = getGreeting();
    greetingEl.style.color = "#22c55e";
    greetingEl.style.fontWeight = "600";
  }

});
