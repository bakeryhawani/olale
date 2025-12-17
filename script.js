// Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

function toggleMobileMenu() {
    if (window.innerWidth <= 900) {
        navList.classList.remove('active');
    }
}

// Modal Functions
function openModal(id) {
    document.getElementById(id).style.display = 'block';
    toggleMobileMenu(); // Close menu if a modal opens
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

// Security Gate (Auth Logic)
function handleAuth(event, mode) {
    event.preventDefault();
    const name = document.getElementById('reg-name')?.value || "Investor";
    const email = document.getElementById('reg-email')?.value || "client@example.com";

    document.getElementById('member-services').style.display = 'block';
    document.getElementById('portal-content').style.display = 'block';
    
    document.getElementById('auth-ui').innerHTML = `
        <span style="color:#d4af37; font-weight:bold; margin-right:15px">Shalom, ${name}</span>
        <button class="btn-login" onclick="location.reload()">Logout</button>
    `;

    if(mode === 'signup') {
        const message = `New Registration on KaVaMi Website:%0AName: ${name}%0AEmail: ${email}%0AInterest: Relocation and Real Estate`;
        window.open(`https://wa.me/254728447027?text=${message}`, '_blank');
    }

    closeModal('login-modal');
    closeModal('signup-modal');
    document.getElementById('portal-content').scrollIntoView({ behavior: 'smooth' });
}

window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
    }
}