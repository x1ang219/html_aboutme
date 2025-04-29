const backToTopBtn = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    backToTopBtn.style.display = window.scrollY > 300 ? 'inline-flex' : 'none';
});

// 自動增高 textarea
const textarea = document.getElementById('message');
if (textarea) {
    textarea.addEventListener('input', () => {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    });
}
