const currentTheme = 'dark'; 

document.documentElement.setAttribute('data-theme', currentTheme);
localStorage.setItem('theme', currentTheme);

// Removed light mode because it doesn't work idk why



function openModal(modalId, plan) {
  document.getElementById(modalId).style.display = "block";
  console.log(`ID: ${modalId}`)
  console.log(`Plan: ${plan}`)
      document.querySelector('.location-link-canada').href = `https://billing.layeredy.com/index.php?rp=/store/owehost-game/${plan}`;
      document.querySelector('.location-link-usa').href = `https://billing.layeredy.com/index.php?rp=/store/owehost-game/${plan}`;
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
      event.target.style.display = "none";
  }
}


