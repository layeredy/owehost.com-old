const currentTheme = 'dark'; 

document.documentElement.setAttribute('data-theme', currentTheme);
localStorage.setItem('theme', currentTheme);

// Removed light mode because it doesn't work idk why



function openModal(modalId, plan) {
  document.getElementById(modalId).style.display = "block";
  console.log(`ID: ${modalId}`)
  console.log(`Plan: ${plan}`)
  if(`${plan}` == `2GB`) {
      document.querySelector('.location-link').href = 'https://billing.layeredy.com/index.php?rp=/store/owehost-game/2gb';
  } else if(`${plan}` == `5GB`) {
      document.querySelector('.location-link').href = 'https://billing.layeredy.com/index.php?rp=/store/owehost-game/5gb';
  } else if(`${plan}` == `8GB`) {
      document.querySelector('.location-link').href = 'https://billing.layeredy.com/index.php?rp=/store/owehost-game/8gb';
  } else if(`${plan}` == `10GB`) {
      document.querySelector('.location-link').href = 'https://billing.layeredy.com/index.php?rp=/store/owehost-game/10gb';
  } else if(`${plan}` == `12GB`) {
      document.querySelector('.location-link').href = 'https://billing.layeredy.com/index.php?rp=/store/owehost-game/12gb';
  } else if(`${plan}` == `16GB`) {
      document.querySelector('.location-link').href = 'https://billing.layeredy.com/index.php?rp=/store/owehost-game/16gb';
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


