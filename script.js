// Menu tabs functionality
document.querySelectorAll('.menu-tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Update active tab
        document.querySelectorAll('.menu-tab-btn').forEach(b => {
            b.classList.remove('active');
        });
        this.classList.add('active');
        
        // Filter menu items
        const category = this.getAttribute('data-category');
        document.querySelectorAll('.menu-item').forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Gallery modal functionality
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeModal = document.querySelector('.close-modal');

if (document.querySelectorAll('.gallery-item').length > 0) {
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
            modal.classList.add('active');
            modalImg.src = this.querySelector('img').src;
            document.body.style.overflow = 'hidden';
        });
    });

    closeModal.addEventListener('click', function() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Booking form submission
if (document.querySelector('.book-table')) {
    document.querySelector('.book-table').addEventListener('submit', function(e) {
        e.preventDefault();
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.innerHTML = '<span class="loading"></span>Reserving...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            alert('Your table has been reserved! We look forward to serving you.');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Set minimum date to today
            const today = new Date().toISOString().split('T')[0];
            if (document.getElementById('booking-date')) {
                document.getElementById('booking-date').min = today;
            }
        }, 1500);
    });
}

// Set minimum date for booking to today
const today = new Date().toISOString().split('T')[0];
if (document.getElementById('booking-date')) {
    document.getElementById('booking-date').min = today;
}