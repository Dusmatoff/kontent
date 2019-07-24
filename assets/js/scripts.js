/* Fixed header scroll */
$('.fixed-header').css({position: "fixed", top: "-400px", transition:"0.7s"});
$(window).scroll(function() {
    if ($(this).scrollTop() > 350){  
        $('.fixed-header').css({top: "0px", transition: "all 0.7s"});
    }
    else{
        $('.fixed-header').css({top: "-400px", transition: "all 0.7s"});
    }
});

/* Fixed header menu */
$( ".fixed-header__menu__icon" ).click(function() {
    var fixedHeader = ($( "#fixed-header__menu" ));
    if(fixedHeader.hasClass("showFixedHeader")){
        fixedHeader.removeClass("showFixedHeader");
    }else{
        fixedHeader.addClass("showFixedHeader");
    }
    var menuIcon = ($(".fixed-header__menu-static"));
    if(menuIcon.hasClass("burgerRotate")){
        menuIcon.removeClass("burgerRotate");
    }else{
        menuIcon.addClass("burgerRotate");
    }
});

/* Burger icon rotate */
$( ".mobile-header__menu__text" ).click(function() {
    var fixedMobileHeader = ($( ".mobile-header__bottom" ));
    if(fixedMobileHeader.hasClass("showFixedHeader")){
        fixedMobileHeader.removeClass("showFixedHeader");
    }else{
        fixedMobileHeader.addClass("showFixedHeader");
    }
    var mobileMenuIcon = ($(".mobile-header__menu-static"));
    if(mobileMenuIcon.hasClass("burgerRotate")){
        mobileMenuIcon.removeClass("burgerRotate");
    }else{
        mobileMenuIcon.addClass("burgerRotate");
    }
});

/* checkbox */

$('.checkbox:checked').closest('label').addClass('active');
$(document).on('change', '.checkbox', function(){
	var t = $(this);
	if(t.prop('checked')){
		t.closest('label').addClass('active');
	}else{
		t.closest('label').removeClass('active');
	}
})