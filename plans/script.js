const currentTheme = 'dark'; 

document.documentElement.setAttribute('data-theme', currentTheme);
localStorage.setItem('theme', currentTheme);

// Removed light mode because it doesn't work idk why



function openModal(modalId, plan) {
  document.getElementById(modalId).style.display = "block";
  console.log(`ID: ${modalId}`)
  if(`${plan}` == `2GB`) {
      document.querySelector('.location-link').href = 'new-link.html';
  } else if(`${plan}` == `5GB`) {
      document.querySelector('.location-link').href = 'new-link.html';
  } else if(`${plan}` == `7GB`) {
      document.querySelector('.location-link').href = 'new-link.html';
  } else if(`${plan}` == `10GB`) {
      document.querySelector('.location-link').href = 'new-link.html';
  } else if(`${plan}` == `12GB`) {
      document.querySelector('.location-link').href = 'new-link.html';
  } else if(`${plan}` == `16GB`) {
      document.querySelector('.location-link').href = 'new-link.html';
  }
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
      event.target.style.display = "none";
  }
}


