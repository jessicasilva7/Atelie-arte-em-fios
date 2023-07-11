document.querySelector('.menu-toggle').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.containerNav__navegacao').classList.toggle('active');
    
})



document.addEventListener('click', function(event) {
    let menuToggle = document.querySelector('.menu-toggle');
    let sidebar = document.querySelector('.containerNav__navegacao');
    if (!menuToggle.contains(event.target) && !sidebar.contains(event.target)) {
        menuToggle.classList.remove('active');
        sidebar.classList.remove('active');
    }
});

document.querySelectorAll('.containerNav__lista--item a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        let target = this.getAttribute('href');
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        document.querySelector('.menu-toggle').classList.remove('active');
        document.querySelector('.containerNav__navegacao').classList.remove('active');
    });
});
