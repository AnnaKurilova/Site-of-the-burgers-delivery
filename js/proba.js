var accordion = document.getElementsByClassName("team__accordion-item");


for (var i=0; i < accordion.length; i++) {
  accordion[i].addEventListener(click,function() {
    if (!(this.classList.contains("active"))) {
      for(var i=0; i < accordion.length; i++) {
        accordion[i].classList.remove("active");
      }
      this.classList.add ("active");
    }
  })
}






$(document).ready(function () {

    //VERTICAL ACCORDION
    
    $(function () {
        $('.team__accordeon-trigger').on('click', function (e) {
            e.preventDefault();
    
            var $this = $(this),
                item = $this.closest('.team__accordeon-item'),
                container = $this.closest('.team__accordeon'),
                items = container.find('.team__accordeon-item'),
                content = item.find('.team__accordeon-content'),
                otherContent = container.find('.team__accordeon-content');
    
            if (!item.hasClass('active')) {
                items.removeClass('active');
                item.addClass('active');
                otherContent.slideUp();
                content.slideDown();
            } else {
                item.removeClass('active');
                content.slideUp();
            }
    
        });
    
    });
    
    //HORIZONTAL ACCORDION
    
    $(function () {
        $('.menu__accordeon-trigger').on('click', function (e) {
            e.preventDefault();
    
            var $this = $(this),
                item = $this.closest('.menu__accordeon-item'),
                container = $this.closest('.menu__accordeon-list'),
                items = container.find('.menu__accordeon-item'),
                activeItem = items.filter('.active'),
                content = item.find('.menu__accordeon-item--content'),
                activeContent = activeItem.find('.menu__accordeon-item--content');
    
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
    
            if (!$this.closest('.menu__accordeon-list').length) {
                $('.menu__accordeon-item--content').animate({
                    'width': '0px'
                });
    
                $('.menu__accordeon-item').removeClass('active');
            }
        });
    
    });
    
    });




    var accordion = document.getElementById("accordion");
var items = accordion.getElementsByClassName("team__accordion-item");
var contents = accordion.getElementsByClassName("team__accordion-content");
var i;

accordion.addEventListener("click", function(e) {
    if (e.target.classList.contains("team__accordion-trigger")) {
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





  // Select the elements we want to show or hide
var hamburger = document.querySelector('.hamburger__menu-link');
var menu = document.querySelector('.nav__list');
var close = document.querySelector('.nav__item');



// When the user clicks on the hamburger icon the 'open' class is added
// to both the menu and overlay elements making them visible and triggering the animation
hamburger.addEventListener('click', function(){
  menu.className += ' open';
  
})


// When the close button is clicked the 'open' class is removed from
// both the menu and overlay elements making them invisible
close.addEventListener('click', function(){
  menu.className = 'menu';
  
})