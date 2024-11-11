// Reveal Nav bar on mouse move, create animation later

const revealNav = () => {
    const nav = document.getElementById('animation');
    nav.style.display = 'block';
    document.removeEventListener('mousemove', revealNav);
}

document.addEventListener('mousemove', revealNav);

// scroll between sections with one mousewheel click

let scroll = 1

const scrollViewport = () => {
    element = document.getElementById(`scroll-${scroll}`);
    element.scrollIntoView({behavior: 'smooth', block: 'start'});
}

const wheel = (event) => {
    // scrolling up
    if(event.deltaY < 0) {
        if(scroll > 1) {
            scroll--;
            scrollViewport();
        }
    } 
    // scrolling down
    else {
        if(scroll < 4) {
            scroll++;
            scrollViewport();
        }
    }
}

document.addEventListener('wheel', wheel);