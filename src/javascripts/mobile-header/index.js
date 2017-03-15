
// view
var $mobileHeader = $('.mobile-header');
var $mobileHeaderBtn = $('.mobile-header__btn');
var $mobileSideMenu = $('.mobile-side-menu');
var $mobileSideMenuList = $('#about-li__sub-menu');



//controller

$mobileHeaderBtn.on('click', function() {
    mobileSideMenuHandler(this);
});


function mobileSideMenuHandler(selector) {

    $mobileSideMenu
                .toggleClass('active')
                .find('.btn-arrow')
                .addClass('collapsed');

    $mobileSideMenuList.removeClass('in');

}