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
    let userBirthMilliSec = userComBirthDay.getTime();
    let currentMilliSec = time.getTime();
    let finalUserMilliSec = currentMilliSec - userBirthMilliSec;
    
    let finalYears = Math.trunc(finalUserMilliSec / (1000 * 60 * 60 * 24 * 365.25));
    let finalMonths = Math.trunc((finalUserMilliSec / (1000 * 60 * 60 * 24 * 12)));
    let finalDays = Math.trunc((finalUserMilliSec / (1000 * 60 * 60 * 24)));
    
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