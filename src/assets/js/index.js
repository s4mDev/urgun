/* eslint-disable */ 
import '../scss/main.scss';
import 'slick-carousel';
import 'magnific-popup/dist/jquery.magnific-popup.min';
import 'jquery-nice-select/js/jquery.nice-select';

$(document).ready(function() {
    $('.about__slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
              }
            },
          ],
    });
});
$(document).ready(function() {
    $('.room__slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: true,
    });
});
$(document).ready(function() {
    $('.sales__slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
    });
});
$(document).ready(function() {
    $('.js--openImage').magnificPopup({
        type: 'image',
        zoom: {
            enabled: true,
            duration: 300,
        },
    });
});
$(document).ready(function() {
    $('.room__content-more').click(function () {
        $(this).parent('div').addClass('unlocked');
    });
});
$(document).ready(function() {
    $('.faq-item__header').click(function () {
        $(this).toggleClass('active');
    });
});
$(document).ready(function() {
    $('#agree').change(function () {
        if ($(this).is(':checked')) {
            $('.popup-form__submit').removeAttr('disabled');
        } else {
            $('.popup-form__submit').attr('disabled', 'disabled');
        }
    });
});
$(document).ready(function() {
    $('.js--openModal').click(function () {
        $('body').addClass('open-modal');
        $('html').addClass('locked');
    });
});
$(document).ready(function() {
    $('.backdrop').click(function () {
        $('body').removeClass('open-modal');
        $('html').removeClass('locked');
    });
});
$(document).ready(function() {
    $('.mob-header__burger').click(function () {
        $('body').toggleClass('open-nav');
        $('html').toggleClass('locked');
        $(this).toggleClass('open');
    });
});
$(document).ready(function() {
    $('.mob-nav__list > li').click(function () {
        $('body').toggleClass('open-nav');
        $('html').toggleClass('locked');
        $('.mob-header__burger').toggleClass('open');
    });
});
$(document).ready(function() {
    $('.gets__nav').slick({
        infinite: true,
        slidesToScroll: 1,
        variableWidth: true,
        focusOnSelect: true,
        asNavFor: '.gets__block',
    });
});
$(document).ready(function() {
    $('.compose__slider').slick({
        infinite: true,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.compose__nav',
    });
});
$(document).ready(function() {
    $('.compose__nav').slick({
        infinite: true,
        slidesToShow: 4,
        arrows: false,
        focusOnSelect: true,
        asNavFor: '.compose__slider',
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
              }
            },
          ],
    });
});
$(document).ready(function() {
    $('.gets__block').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        fade: true,
        asNavFor: '.gets__nav',
    });
});
$(document).ready(function() {
    $('.gets-block__more').click(function () {
        $(this).parent('div').addClass('active');
    });
});
$.datepicker.regional['ru'] = {
    closeText: 'Закрыть',
    prevText: 'Предыдущий',
    nextText: 'Следующий',
    currentText: 'Сегодня',
    monthNames: ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'],
    monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
    dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
    dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
    dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    weekHeader: 'Не',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['ru']);
$(document).ready(function() {
    $(".js--date").datepicker();
});
$(document).ready(function() {
    $('.rent__item-select').niceSelect();
});