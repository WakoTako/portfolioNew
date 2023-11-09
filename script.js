// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }
    
    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const offsetTop = targetElement.offsetTop;
            const scrollOptions = {
                top: offsetTop,
                behavior: 'smooth'
            };
            window.scroll(scrollOptions);
        }
    }
});
