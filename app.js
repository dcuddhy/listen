"use strict";
$( document ).ready(function() {


  $('.container').on('click', '.fa-play', function() {
    document.getElementById('jam').play();
    $('.fa').removeClass('fa-stop').addClass('fa-play');
    $(this).removeClass('fa-play').addClass('fa-stop');
  });

  $('.container').on('click', '.fa-stop', function() {
    document.getElementById('jam').pause();
    document.getElementById('jam').currentTime = 0;
    $(this).removeClass('fa-stop').addClass('fa-play');
  });


  $.getJSON('data.json', function(tracks) {

    var $tracksTemplate = $('#tracksTemplate').html();

    var newHTML = Mustache.to_html($tracksTemplate, tracks);

    $('.player').html(newHTML);
  });


    // WILL PAUSE A JAM
    // document.getElementById('jam').pause();


});
