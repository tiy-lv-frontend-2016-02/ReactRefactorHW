require("../css/normalize.css");
require("bootstrap/dist/css/bootstrap.min.css");
require("../css/main.css");

import $ from 'jquery';
import jQuery from 'jquery';
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

// Only uncomment this if you're wanting to generate more data
// var data = require('./lib/generateData');
// data.generate(30);
$(document).ready(function(){
  var Router = require('./router.js');
});