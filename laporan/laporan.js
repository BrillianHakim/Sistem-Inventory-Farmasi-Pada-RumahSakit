// Hamburger 
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    
    hamburger.addEventListener('click', function() {
        // Toggle class untuk animasi hamburger
        hamburger.classList.toggle('active');
        
        // Toggle class untuk mengubah lebar sidebar
        sidebar.classList.toggle('collapsed');
    });
});