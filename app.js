function ageCalculate() {
  let time = new Date();
  let userName = document.getElementById('name').value.trim();
  let userBirthDay = document.getElementById('birthday').value;
  
  if (!userName || !userBirthDay) {
    alert('Please enter your name and date of birth!');
    return;
  }
  
  let nameUpperCase = userName.toUpperCase();
  let birthDate = new Date(userBirthDay);
  let today = new Date();

  let birthYear = birthDate.getFullYear();
  let birthMonth = birthDate.getMonth();
  let birthDay = birthDate.getDate();

  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth();
  let currentDay = today.getDate();

  let finalYears = currentYear - birthYear;
  let finalMonths = currentMonth - birthMonth;
  let finalDays = currentDay - birthDay;

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
}

function resetCalculator() {
  document.getElementById('input-section').classList.remove('hidden');
  document.getElementById('resultbox').classList.add('hidden');

  document.getElementById('name').value = '';
  document.getElementById('birthday').value = '';
}
