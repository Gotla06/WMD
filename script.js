// DOM Elements
const membershipModal = document.getElementById('membershipModal');
const membershipForm = document.getElementById('membershipForm');
const classButtons = document.querySelectorAll('.class-card .btn');
const trainerButtons = document.querySelectorAll('.trainer-card .btn');
const closeButton = document.querySelector('.close');

// Initialize modal functionality
function initModal() {
    // Membership Modal Functions
    function openMembershipModal(plan = '') {
        membershipModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
        
        if (plan) {
            document.getElementById('membershipType').value = plan;
            document.getElementById('modalTitle').textContent = `Join POWERHOUSE GYM - ${plan} Membership`;
        }
    }
    
    function closeMembershipModal() {
        membershipModal.style.display = 'none';
        document.body.style.overflow = ''; // Re-enable scrolling
    }
    
    // Close modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target === membershipModal) {
            closeMembershipModal();
        }
    }
    
    // Close button event
    closeButton.addEventListener('click', closeMembershipModal);
    
    // Form submission
    membershipForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = {
            name: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            membershipType: document.getElementById('membershipType').value,
            startDate: document.getElementById('startDate').value
        };
        
        // In a real app, you would send this data to a server
        console.log('Form submitted:', formData);
        
        // Show success message
        alert(`Thank you, ${formData.name}! Your ${formData.membershipType} membership application has been received. We'll contact you shortly.`);
        
        closeMembershipModal();
        this.reset();
    });
    
    // Make functions available globally
    window.openMembershipModal = openMembershipModal;
    window.closeMembershipModal = closeMembershipModal;
}

// Class Buttons functionality
function initClassButtons() {
    classButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const classCard = this.closest('.class-card');
            const className = classCard.querySelector('.card-title').textContent;
            const instructor = classCard.querySelectorAll('li')[1].textContent.replace('Instructor: ', '');
            
            // Set default membership type to Premium (since classes require at least Premium)
            document.getElementById('membershipType').value = 'Premium';
            
            openMembershipModal('Premium');
            
            // Update modal title to be class-specific
            document.getElementById('modalTitle').textContent = `Join ${className} with ${instructor}`;
            
            // Scroll to the form
            setTimeout(() => {
                document.getElementById('fullName').focus();
            }, 300);
        });
    });
}

// Trainer Buttons functionality
function initTrainerButtons() {
    trainerButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const trainerCard = this.closest('.trainer-card');
            const trainerName = trainerCard.querySelector('.card