// Reveal Nav bar on mouse move, create animation later

const revealNav = () => {
    const nav = document.getElementById('animation');
    nav.style.display = 'block';
    document.removeEventListener('mousemove', revealNav);
}

document.addEventListener('mousemove', revealNav);