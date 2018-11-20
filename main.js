
// When everything is ready
window.onload = () => {
    // Attach keyboard listeners
    window.addEventListener('keydown', e => {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
        if (audio) {
            audio.currentTime = 0;
            audio.play();
            key.classList.add('playing');
        }
    });

    // Attach transition end listeners
    document.querySelectorAll('.key').forEach(key => {
        key.addEventListener('transitionend', e => {
            e.target.classList.remove('playing');
        });
    });
}