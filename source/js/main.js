$(document).ready(function () {

// $('.owl-carousel').owlCarousel();
  $('.owl-carousel').owlCarousel({
      loop:true,
      margin: 70,
      items: 1,
      center: true,
      dots: true,
      nav: false,
      autoWidth: true,
      // navContainer: '',
      dotsContainer: '#gallery-dots',
      responsiveClass:true
      // responsive:{
      //     0:{
      //         items: 1,
      //         margin: 50,
      //         loop: true,
      //         autoWidth: true,
      //         autoplay: true,
      //         center: true,
      //         dots: false
      //     },
      //     500:{
      //         items:1,
      //         loop: true,
      //         autoWidth: true,
      //         margin: 50,
      //         center: true,
      //         autoplay: false,
      //         dots: false
      //     },
      //     768:{
      //         items:1,
      //         loop:true,
      //         autoWidth: true,
      //         center: true,
      //         // autoWidth: false,
      //         dots: true
      //     }
      // }
  });

  // timer
  (function() {
    $(document).ready(function() {
      var now = new Date(),
        secPassed = now.getHours() * 60 * 60 + now.getMinutes() * 60 + now.getSeconds();
      var t = (60 * 60 * 24) - secPassed;
      $('.timer').countdown({
        until: (t),
        labels: ['Годы', 'Месяцы', 'Недели', 'Дни', 'Часов', 'Минут', 'Секунд'],
        labels1: ['Годы', 'Месяцы', 'Недели', 'Дни', 'Часов', 'Минут', 'Секунд'],
        format: 'HMS',
        layout: '<li><div><span>{h10}</span></div><div><span>{h1}</span></div></li><li><div><span>{m10}</span></div><div><span>{m1}</span></div></li><li><div><span>{s10}</span></div><div><span>{s1}</span></div></li>'
      });
    });
  })();


  $('.header__nav-link').on('click', function(e) {
    e.preventDefault();

    showSection($(this).attr('href'), true); 
  });

  showSection(window.location.hash, false);

})

$(window).scroll(function() {
  checkSection();
});

  function showSection(section, isAnimate) {
    var 
        direction = section.replace(/#/, ''),
        reqSection = $('.section').filter('[data-section="' + direction + '"]'),
        reqSectionPos = reqSection.offset().top - 30;
        if (isAnimate) {
          $('body, html').animate({scrollTop: reqSectionPos}, 500);
        } else {
          $('body, html').scrollTop(reqSectionPos);
        }
  }

function checkSection() {
  $('.section').each((function() {
    var 
        that = $(this),
        topEdge = that.offset().top,
        bottomEdge = topEdge + that.height(),
        wScroll = $(window).scrollTop();

        if (topEdge < wScroll && bottomEdge > wScroll ) {
          var
              currentId = that.data('section'),
              reqLink = $('.header__link').filter('[href="#' + currentId + '"]');

          reqLink.closest('.header__item').addClass('active__tab').siblings().removeClass('active__tab');

          window.location.hash = currentId;
        }
  }));
}