// document.addEventListener("DOMContentLoaded", () => {
//     const title = document.querySelector('.section-tittle');
//     setInterval(() => {
//         title.style.animation = 'none';
//         title.offsetHeight; // Trigger reflow to restart the animation
//         title.style.animation = 'typing 3.5s steps(40, end) infinite, blink-caret 0.75s step-end infinite';
//     }, 4000); // Restart the typing effect every 4 seconds
// })


// Disable right-click with alert
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('Right-click is disabled to protect the content.');
});

// Prevent certain keyboard shortcuts with alert
document.addEventListener('keydown', function(e) {
    // F12
    if (e.key === 'F12') {
        e.preventDefault();
        alert('Opening DevTools is disabled to protect the content.');
    }
    // Ctrl+Shift+I
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        alert('Opening DevTools is disabled to protect the content.');
    }
    // Ctrl+Shift+J
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        alert('Opening DevTools is disabled to protect the content.');
    }
    // Ctrl+U
    if (e.ctrlKey && e.key === 'U') {
        e.preventDefault();
        alert('Viewing the page source is disabled to protect the content.');
    }
});

// Alert on DevTools detection
(function() {
    const element = new Image();
    Object.defineProperty(element, 'id', {
        get: function() {
            alert('DevTools is open! Please close it to continue.');
            return '';
        }
    });
    console.log('%c', element);
})();

