
// ==== Setup

import 'babel-polyfill';
require('../sass/main.scss');

var Promise = require('bluebird');
var _ = require('lodash');

// ==== JQuery

$(document).ready(function(){

// view
var $mobileHeader = $('.mobile-header');
var $mobileHeaderBtn = $('.mobile-header__btn');
var $mobileSideMenu = $('.mobile-side-menu');



//controller

$mobileHeaderBtn.on('click', function() {
    mobileSideMenuHandler(this);
});


function mobileSideMenuHandler(selector) {
    $mobileSideMenu.toggleClass('active');
}

});