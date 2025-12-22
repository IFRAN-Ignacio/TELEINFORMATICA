// ==========================
// TAG TOOLTIP SYSTEM
// ==========================

const tags = document.querySelectorAll('.index-tag');

// Creamos el tooltip
const tooltip = document.createElement('div');
tooltip.className = 'tag-tooltip';
document.body.appendChild(tooltip);

tags.forEach(tag => {
    tag.addEventListener('mouseenter', (e) => {
        const info = tag.getAttribute('data-info');
        tooltip.textContent = info;
        tooltip.classList.add('visible');
    });

    tag.addEventListener('mousemove', (e) => {
        tooltip.style.left = e.clientX + 15 + 'px';
        tooltip.style.top = e.clientY + 15 + 'px';
    });

    tag.addEventListener('mouseleave', () => {
        tooltip.classList.remove('visible');
    });
});