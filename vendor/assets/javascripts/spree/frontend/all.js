// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require spree/frontend

//= require spree/frontend/spree_amazon_like_dropdown
//= require_tree .
//= require spree/frontend/spree_add_to_cart_ajax

$(function() {
  $('<div class="spreex_promo" target="_blank">+ <a href="https://spreex.github.io/extensions/spree_amazon_like_dropdown">spree_amazon_like_dropdown</a> &amp;' +
    ' <a target="_blank" href="https://spreex.github.io/extensions/spree_add_to_cart_ajax">spree_add_to_cart_ajax</a></div>').appendTo('#logo');
});
