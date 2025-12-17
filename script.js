// Modal Functions
function openModal(id) {
    document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

// Security Gate (Auth Logic)
function handleAuth(event, mode) {
    event.preventDefault();
    
    // Simulate Login Success
    const name = document.getElementById('reg-name')?.value || "Investor";
    const email = document.getElementById('reg-email')?.value || "client@example.com";

    // Show Protected Content
    document.getElementById('member-services').style.display = 'block';
    document.getElementById('portal-content').style.display = 'block';
    
    // Update Auth Buttons to Profile
    document.getElementById('auth-ui').innerHTML = `
        <span style="color:var(--primary); font-weight:bold; margin-right:15px">Shalom, ${name}</span>
        <button class="btn-login" onclick="location.reload()">Logout</button>
    `;

    // Notify CEO via WhatsApp on Signup
    if(mode === 'signup') {
        const message = `New Registration on KaVaMi Website:%0AName: ${name}%0AEmail: ${email}%0AInterest: Relocation and Real Estate`;
        window.open(`https://wa.me/254728447027?text=${message}`, '_blank');
    }

    closeModal('login-modal');
    closeModal('signup-modal');
    window.location.hash = "portal-content";
}

// Close modals when clicking outside
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
    }
}