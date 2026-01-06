document.addEventListener('DOMContentLoaded', () => {
    console.log('Workaholic Waitlist App Initialized');

    const waitlistButtons = document.querySelectorAll('.btn-primary-custom');
    // Select the modal element
    const waitlistModalElement = document.getElementById('waitlistModal');
    // Initialize Bootstrap modal instance
    // Note: We assume Bootstrap 5 is loaded globally
    const waitlistModal = new bootstrap.Modal(waitlistModalElement);

    waitlistButtons.forEach(button => {
        button.addEventListener('click', () => {
            waitlistModal.show();
        });
    });

    // Handle form submission (simulation)
    const waitlistForm = document.getElementById('waitlistForm');
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = waitlistForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;

            btn.innerHTML = 'Joining...';
            btn.disabled = true;

            setTimeout(() => {
                alert('Success! You have been added to the waitlist.');
                waitlistModal.hide();
                waitlistForm.reset();
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 1000);
        });
    }
});
