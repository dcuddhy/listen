"use strict";
$( document ).ready(function() {



$('.container').on('click', '.fa-play', function() {
  $('.fa').removeClass('fa-stop').addClass('fa-play');
  $(this).removeClass('fa-play').addClass('fa-stop');
});

$('.container').on('click', '.fa-stop', function() {
  $(this).removeClass('fa-stop').addClass('fa-play');
});



  jQuery.getJSON('data.json', function(tracks) {

    var $tracksTemplate = $('#tracksTemplate').html();

    var newHTML = Mustache.to_html($tracksTemplate, tracks);

    $('.player').html(newHTML);
  });



});
