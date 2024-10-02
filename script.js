const currentTheme = 'dark'; 

document.documentElement.setAttribute('data-theme', currentTheme);
localStorage.setItem('theme', currentTheme);

// Removed light mode because it doesn't work idk why


// Typing effect
document.addEventListener('DOMContentLoaded', function () {
    const element = document.querySelector('.text-lowercase');
    const words = ["Minecraft server", "Discord bot", "Website", "VPS"];
    let index = 0;
    let charIndex = 0;
    const typingSpeed = 150;
    let isDeleting = false;

    function typeWriter() {
        if (charIndex < words[index].length && !isDeleting) {
            element.textContent += words[index].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, typingSpeed);
        } else if (charIndex > 0 && isDeleting) {
            element.textContent = element.textContent.slice(0, -1);
            charIndex--;
            setTimeout(typeWriter, typingSpeed);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                index = (index + 1) % words.length;
            }
            setTimeout(typeWriter, 500);
        }
    }

    typeWriter();
});