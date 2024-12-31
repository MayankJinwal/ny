document.addEventListener('DOMContentLoaded', () => {
    // Initialize sections animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
});

function submitFoodChoice() {
    const foodChoice = document.getElementById('foodChoice').value;
    const responseDiv = document.getElementById('foodResponse');
    
    responseDiv.style.opacity = '0';
    responseDiv.style.transform = 'translateY(20px)';
    
    const message = `
        <div class="response-content">
            <p>You've chosen: <strong>${foodChoice}</strong></p>
            <p>Aree, kuchh bhi nahi dala toh option dalna hi bhool gaya!</p>
        </div>
    `;
    
    setTimeout(() => {
        responseDiv.innerHTML = message;
        responseDiv.style.opacity = '1';
        responseDiv.style.transform = 'translateY(0)';
    }, 300);
}

window.onload = () => {
    setTimeout(() => {
        const popup = document.getElementById('popup');
        popup.style.display = 'flex';
        popup.style.opacity = '0';
        
        requestAnimationFrame(() => {
            popup.style.transition = 'opacity 0.5s ease';
            popup.style.opacity = '1';
        });
    }, 1500);
};

function acceptVoiceNote() {
    const popup = document.getElementById('popup');
    popup.style.opacity = '0';
    setTimeout(() => popup.style.display = 'none', 500);
}

function declineVoiceNote() {
    const popupContent = document.querySelector('.popup-content');
    const noButton = popupContent.querySelector('button:last-child');
    
    popupContent.classList.add('shake');
    noButton.disabled = true;
    
    setTimeout(() => {
        popupContent.classList.remove('shake');
        noButton.disabled = false;
    }, 500);
}

// Footer heart animation
document.querySelector('footer').addEventListener('click', () => {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.style.cssText = `
        position: fixed;
        bottom: 60px;
        left: ${Math.random() * window.innerWidth}px;
        font-size: 24px;
        color: #ff80bf;
        animation: floatUp 1.5s ease-out forwards;
    `;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1500);
});