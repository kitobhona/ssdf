document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.cursor');
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});