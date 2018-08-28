$(document).ready(function () {

    //ONE PAGE SCROLL
    $(function () {

        var sections = $('.section'),
            display = $('.maincontent'),
            inScroll = false;

        var scrollToSection = function (sectionEq) {

            var position = 0;

            if (!inScroll) {
                inScroll = true;
                position = (sections.eq(sectionEq).index() * -100) + '%';
                sections.eq(sectionEq).addClass('active').siblings().removeClass('active');
                display.css({
                    'transform': 'translate3d(0,' + position + ', 0)'
                });
                setTimeout(function () {
                    inScroll = false;

                    $('.fixed-menu__item').eq(sectionEq).addClass('active').siblings().removeClass('active');
                }, 1300)
            }
        }

        $('.wrapper').on('wheel', function (e) {

            var deltaY = e.originalEvent.deltaY,
                activeSection = sections.filter('.active'),
                nextSection = activeSection.next(),
                prevSection = activeSection.prev();

            //scroll down
            if (deltaY > 0) {
                if (nextSection.length) {
                    scrollToSection(nextSection.index());
                }
            }
            //scroll up
            if (deltaY < 0) {
                if (prevSection.length) {
                    scrollToSection(prevSection.index());
                }
            }

        });


        $('.arrow').on('click', function (e) {
            e.preventDefault();
            scrollToSection(1);
        });

        $('.sidemenu__item--link, .nav__link, .order-link, .burgers-slider__buy').on('click', function (e) {
            e.preventDefault();
            var href = parseInt($(this).attr('href'));
            scrollToSection(href);

        });

        $(document).on('keydown', function (e) {

            var activeSection = sections.filter('.active'),
                nextSection = activeSection.next(),
                prevSection = activeSection.prev();

            switch (e.keyCode) {
                case 40: //page down
                    if (nextSection.length) {
                        scrollToSection(nextSection.index());
                    }
                    break;

                case 38: //page up
                    if (prevSection.length) {
                        scrollToSection(prevSection.index());
                    }
                    break;
            }

        });

    });




//SLIDER OWL CAROUSEL

$(function () {

    var burgerCarousel = $('.owl-carousel').owlCarousel({
        items: 1,
        smartSpeed: 2000, //Время движения слайда
        loop: true
    });

    $('.burger-slider__btn_next').on('click', function (e) {
        e.preventDefault();
        burgerCarousel.trigger('next.owl.carousel');

    });

    $('.burger-slider__btn_prev').on('click', function (e) {
        e.preventDefault();
        burgerCarousel.trigger('prev.owl.carousel');

    });

});



//HIDDEN MENU

var openBtn = document.querySelector('.hamburger__menu-link');
//var closeBtn = document.querySelector
var menu = document.querySelector('.nav__hidden');

openBtn.addEventListener ('click', function (e) {
    e.preventDefault();
    menu.classList.remove('nav__hiden-list');
});





// Select the elements we want to show or hide
var mobileBtn = document.querySelector('.hamburger__menu-link');
var menu = document.querySelector('.nav__list');
var closeBtn = document.querySelector('.nav__item-close');



// When the user clicks on the hamburger icon the 'open' class is added
// to both the menu and overlay elements making them visible and triggering the animation
mobileBtn.addEventListener('click', function(){
  menu.className += ' open';
  
 
})



// When the close button is clicked the 'open' class is removed from
// both the menu and overlay elements making them invisible
closeBtn.addEventListener('click', function(){
  menu.className = 'nav__list';
  
 
});







//VERTICAL ACCORDION

var accordion = document.querySelector('.team__accordion');
var items = accordion.getElementsByClassName("team__accordion-item");
var contents = accordion.getElementsByClassName("team__accordion-content");
var i;

accordion.addEventListener("click", function(e) {
    if (e.target.classList.contains("team__accordion-trigger")) {
      e.preventDefault();
      var trigger = e.target;
      var content = trigger.nextElementSibling;
      var item = trigger.parentNode;
  
      if (!item.classList.contains("active")) { // не активный
        // удаляем active для всех li
        for (i = 0; i < items.length; i++) {
          items[i].classList.remove("active");
        }
        // добавляем active для текущего li
        item.classList.add("active");
  
        // закрываем все блоки с контентом
        for (i = 0; i < contents.length; i++) {
          contents[i].style.height = null;
        }
        // открываем текущий блок с контентом
        content.style.height = content.scrollHeight + "px";
        
      } else { // активный
        // удаляем класс active для текущего li
        item.classList.remove("active");
        
        // закрываем текущий блок с контентом
        content.style.height = null;
      }
    }
  }); 


//HORIZONTAL ACCORDION

$(function () {
    $('.menu__accordion-trigger').on('click', function (e) {
        e.preventDefault();

        var $this = $(this),
            item = $this.closest('.menu__accordion-item'),
            container = $this.closest('.menu__accordion-list'),
            items = container.find('.menu__accordion-item'),
            activeItem = items.filter('.active'),
            content = item.find('.menu__accordion-item--content'),
            activeContent = activeItem.find('.menu__accordion-item--content');

        if (!item.hasClass('active')) {
            items.removeClass('active');
            item.addClass('active');

            activeContent.animate({
                'width': '0px'
            });

            content.animate({
                'width': '550px'
            })

        } else {
            item.removeClass('active');
            content.animate({
                'width': '0px'
            });
        }

    });

    //закрытие аккордеона при клике НЕ по item 
    $(document).on('click', function (e) {
        var $this = $(e.target);

        if (!$this.closest('.menu__accordion-list').length) {
            $('.menu__accordion-item--content').animate({
                'width': '0px'
            });

            $('.menu__accordion-item').removeClass('active');
        }
    });

});


//MAPS

ymaps.ready(init);

var placemarks = [
    {
        latitude: 59.94554327989287,
        longitude: 30.38935262114668,
        hintContent: '<div class="map__hint">Суворовский проспект, 67</div>',
        balloonContent: []
    },
    {
        latitude: 59.91142323563909,
        longitude: 30.50024587065841,
        hintContent: '<div class="map__hint">проспект Солидарности</div>',
        balloonContent: []
    },
    {
        latitude: 59.88693161784606,
        longitude: 30.319658102103713,
        hintContent: '<div class="map__hint">Московский проспект</div>',
        balloonContent: []
    },
    {
        latitude: 59.97033574821672,
        longitude: 30.315194906302924,
        hintContent: '<div class="map__hint">проспект Медиков, 7</div>',
        balloonContent: []
    }
],
    geoObjects= [];

function init() {
    var map = new ymaps.Map('map', {
        center: [59.94, 30.32],
        zoom: 12,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    for (var i = 0; i < placemarks.length; i++) {
            geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
            {
                hintContent: placemarks[i].hintContent,
                balloonContent: placemarks[i].balloonContent.join('')
            },
            {
                iconLayout: 'default#image',
                iconImageHref: 'img/map/sprite.png',
                iconImageSize: [46, 57],
                iconImageOffset: [-23, -57],
                iconImageClipRect: [[415, 0], [461, 57]]
            });
    }

    var clusterer = new ymaps.Clusterer({
        clusterIcons: [
            {
                href: 'img/map/burger.png',
                size: [100, 100],
                offset: [-50, -50]
            }
        ],
        clusterIconContentLayout: null
    });

    map.geoObjects.add(clusterer);
    clusterer.add(geoObjects);
}


 //POPUP

 $(function () {
    $('.btn-bg_black').on('click', function (e) {
        e.preventDefault();
        $('#element_to_pop_up').bPopup({
            modalColor: '#2f3234',
            opacity: 0.92
        });

        $('.full-review__close').on('click', function (e) {
            e.preventDefault();
            $.bPopup.close();
        });

    });

});

//INPUT MASK

  $(function () {
    $('.phone-mask').inputmask('+7 (999) 999 99 99');
});

});


