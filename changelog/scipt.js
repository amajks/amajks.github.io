// Add toggle functionality to show/hide changes on click
document.querySelectorAll('.change-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('expanded');
    });
});
