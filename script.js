// Membership Modal Functions
function openMembershipModal(plan = '') {
    const modal = document.getElementById('membershipModal');
    modal.style.display = 'block';
    
    if (plan) {
        document.getElementById('membershipType').value = plan;
        document.getElementById('modalTitle').textContent = `Join POWERHOUSE GYM - ${plan} Membership`;
    } else {
        document.getElementById('modalTitle').textContent = 'Join POWERHOUSE GYM';
    }
}

function closeMembershipModal() {
    document.getElementById('membershipModal').style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('membershipModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Form submission
document.getElementById('membershipForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your application! We will contact you shortly to complete your membership process.');
    closeMembershipModal();
    this.reset();
});