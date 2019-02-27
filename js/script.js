
function testScroll() {
    var scroll = $('html').scrollTop();
    if(scroll > 200) {
        document.body.classList.add('scrolled');
        document.body.classList.remove('not-scrolled');
    }
    else {
        document.body.classList.remove('scrolled');
        document.body.classList.add('not-scrolled');
    }
}
$(function() {
    window.addEventListener('scroll', testScroll);
    testScroll();
})
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PHXFR45');