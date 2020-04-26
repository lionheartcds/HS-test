jQuery(document).ready(function($) {

	'use strict';

    $(window).scroll(function(){
         $('.header-bg').toggleClass('header-bg-scroll', $(this).scrollTop() > 1);
     });


});
