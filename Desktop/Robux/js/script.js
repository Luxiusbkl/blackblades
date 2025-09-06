let lastScroll = 0;
const header = document.getElementById('site-header');

window.addEventListener('scroll', function() {
    let scrollTop = this.window.pageXOffset || this.document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 50) {

        header.style.transform = 'translateY(-100%)';
    }   else {

        header.style.transform = 'translateY(0)';

    }

    lastScrollTop = scrollTop<= 0 ? 0 : scrollTop;
});
