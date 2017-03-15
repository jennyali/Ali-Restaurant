
// ==== Setup

import 'babel-polyfill';
require('../sass/main.scss');

var Promise = require('bluebird');
var _ = require('lodash');

// ==== JQuery

$(document).ready(function(){

require('./mobile-header/index.js');

$('.carousel').carousel();

});