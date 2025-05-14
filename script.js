
function startApp() {
  const name = document.getElementById('username').value;
  const birthdate = document.getElementById('birthdate').value;
  if (!name || !birthdate) return alert('Пожалуйста, введи имя и дату рождения.');

  localStorage.setItem('raccoonName', name);
  localStorage.setItem('raccoonBirthday', birthdate);
  localStorage.setItem('raccoonEnergy', '100');
  localStorage.setItem('raccoonHealth', '100');
  localStorage.setItem('raccoonStars', '10');

  document.getElementById('greeting-screen').classList.remove('active');
  document.getElementById('main-screen').classList.add('active');
  updateMainScreen();
}

function updateMainScreen() {
  const name = localStorage.getItem('raccoonName');
  const energy = localStorage.getItem('raccoonEnergy');
  const health = localStorage.getItem('raccoonHealth');
  const stars = localStorage.getItem('raccoonStars');
  const birthday = localStorage.getItem('raccoonBirthday');

  document.getElementById('player-name').textContent = name;
  document.getElementById('energy').textContent = energy;
  document.getElementById('health').textContent = health;
  document.getElementById('stars').textContent = stars;

  const today = new Date().toISOString().slice(5, 10);
  if (birthday && birthday.slice(5) === today) {
    alert(`С днём рождения, ${name}!`);
  }
}

function showHomework() {
  document.getElementById('homework-text').style.display = 'block';
}

window.onload = () => {
  if (localStorage.getItem('raccoonName')) {
    document.getElementById('greeting-screen').classList.remove('active');
    document.getElementById('main-screen').classList.add('active');
    updateMainScreen();
  }
};
