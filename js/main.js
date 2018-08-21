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







var openBtn = document.querySelector('.hamburger__menu-link');
var closeBtn = document.querySelector
var menu = document.querySelector('.nav__list');

openBtn.addEventListener ('click', function (e) {
    e.preventDefault();
    menu.classList.remove('nav-list--hiden');
});









var leftArrow = document.querySelector('.burger-slider__btn_prev');
var rightArrow = document.querySelector('.burger-slider__btn_next');
var sliderList = document.querySelector('.owl-carousel');
var sliderContainer = document.querySelector('.burger-slider-wrap');
var size = parseInt(getComputedStyle(sliderContainer).width);
var start = 1;

leftArrow.addEventListener('click', function (e) {
    e.preventDefault();
    var currentLeft = (parseInt(getComputedStyle(sliderList).left));
 
    if (start > 1 && currentLeft % size == 0) {        
      sliderList.style.left = currentLeft + size + 'px';
      start--;      
      
    } else if (currentLeft % size == 0) {
      sliderList.style.left = currentLeft - 4 * size + 'px';
      start = 5;      
    }
 })

rightArrow.addEventListener('click', function (e) {
    e.preventDefault();
    var currentLeft = (parseInt(getComputedStyle(sliderList).left));

    if (start < 5 && currentLeft % size == 0) {

        sliderList.style.left = currentLeft - size + 'px';
        start++;
    
    } else if (currentLeft % size == 0) {
      sliderList.style.left = 0 + 'px';
      start = 1;     
    }
})





//вертикальный аккордеон

var accordion = document.querySelector('.team__content');
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


//горизонтальный аккордеон

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


  //INPUT MASK

  $(function () {
    $('.phone-mask').inputmask('+7 (999) 999 99 99');
});

});


