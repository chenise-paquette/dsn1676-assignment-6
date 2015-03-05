var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');

var $btnMove = $('.btn-move');
var $diamond = $('.diamond');

var $btnCollapseExpand = $('.btn-collapse-expand');
var $panel = $('.panel');

var $btnBounce = $('.btn-bounce');
var $circle = $('.circle');

var $btnAppend = $('.btn-append');
var $ = $('.circle');


$btnCollapseExpand.on('click', function () {
   $panel.toggleClass('js-panel-expand'); 
});

$btnShowHide.on('click', function () {
   $box.toggleClass('js-box-showhide'); 
});

$btnMove.on('click', function () {
   $diamond.toggleClass('js-move-in-out'); 
});

$btnBounce.on('click', function () {
   $circle.toggleClass('js-circle-bounce'); 
});

$circle.on('webkitAnimationEnd animationend', function () {
    $circle.removeClass('js-circle-bounce');
});