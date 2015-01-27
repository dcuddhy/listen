"use strict";
$( document ).ready(function() {

  // Play song! load assures start from beginning, producing
  // stop effect.  var title sends title to header.
  $('.container').on('click', '.fa-play', function() {
    var id = $(this).data('id');
    $("audio").trigger('pause');
    document.getElementById(id).load();
    document.getElementById(id).play();


    $('.fa').removeClass('fa-stop').addClass('fa-play');
    $(this).removeClass('fa-play').addClass('fa-stop');
    var title = $(this).data('title');
    $('.heading').html("Now Playing: " + title );
  });

  //Stop song!  Really pause.  Stop effect implemented above.
  $('.container').on('click', '.fa-stop', function() {
    var id = $(this).data('id');
    document.getElementById(id).pause();
    $(this).removeClass('fa-stop').addClass('fa-play');
    $('.heading').html("Select a song!");
  });

  // Directs script to player with JSON
  $.getJSON('data.json', function(tracks) {
    var $tracksTemplate = $('#tracksTemplate').html();
    var newHTML = Mustache.to_html($tracksTemplate, tracks);
    $('.player').html(newHTML);
  });

});
