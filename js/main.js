document.addEventListener('DOMContentLoaded', () => {
    console.log('Workaholic Waitlist App Initialized');

    // Initialize Bootstrap modal instance if needed for programmatic control
    const waitlistModalElement = document.getElementById('waitlistModal');
    const waitlistModal = new bootstrap.Modal(waitlistModalElement);

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
