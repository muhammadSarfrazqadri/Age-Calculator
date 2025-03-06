/*
    Age Calculator Script
    Developed by: Muhammad Sarfaraz
*/

function ageCalculate() {
  let time = new Date();
  let userName = document.getElementById('name').value.trim();
  let userBirthDay = document.getElementById('birthday').value;
  
  if (!userName || !userBirthDay) {
      alert('Please Enter Your Name and Date of Birth!');
      return;
  }
  
  let nameUpperCase = userName.toUpperCase();
  let userComBirthDay = new Date(userBirthDay);
  
  let userBirthYears = userComBirthDay.getFullYear();
  let currentYear = time.getFullYear();
  let userBirthMonths = userComBirthDay.getMonth();
  let currentMonth = time.getMonth();
  let userBirthDays = userComBirthDay.getDate();
  let currentDay = time.getDate();

  let finalYears = currentYear - userBirthYears;
  let finalMonths = currentMonth - userBirthMonths;
  let finalDays = currentDay - userBirthDays;

  // Adjust days and months if negative
  if (finalDays < 0) {
      finalMonths--;
      let lastMonth = new Date(currentYear, currentMonth, 0);
      finalDays += lastMonth.getDate();
  }

  if (finalMonths < 0) {
      finalYears--;
      finalMonths += 12;
  }

  document.getElementById('resultname').textContent = `Dear ${nameUpperCase},`;
  document.getElementById('resultage').textContent = `You are ${finalYears} years, ${finalMonths} months, and ${finalDays} days old.`;
  
  let progress = (finalYears / 100) * 100;
  document.getElementById('progressBar').style.width = `${progress}%`;
  
  document.getElementById('input-section').classList.add('hidden');
  document.getElementById('resultbox').classList.remove('hidden');

  document.getElementById('developer').textContent = "Developed by Muhammad Sarfaraz";
}

function resetCalculator() {
  document.getElementById('input-section').classList.remove('hidden');
  document.getElementById('resultbox').classList.add('hidden');
  
  document.getElementById('name').value = '';
  document.getElementById('birthday').value = '';
}
