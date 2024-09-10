const envelope = document.getElementById('envelope');
let isOpen = false;

envelope.addEventListener('click', () => {
    if (!isOpen) {
        envelope.classList.add('open');
        isOpen = true;
    }
});
