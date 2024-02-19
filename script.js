// Smooth scrolling
document.addEventListener("DOMContentLoaded", function () {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(smoothScrollLink => {
        smoothScrollLink.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scroll({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
