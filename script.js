$(function(){
  var $profilePic = $('.profilePic');
  var $name = $('.name');
  var $title = $('.title');
  var $location = $('.location');
  var apiUrl = "https://desolate-springs-35710.herokuapp.com/me";

  $.ajax({
    url: apiUrl,
    dataType: 'jsonp'
  }).done(function(data){
    //set attributes
    $profilePic.attr("src", data.profilePic);
    $name.text(data.name);
    $title.text(data.title);
    $location.text(data.location);

  }).fail(function(req, textStatus, errThrown){
    console.log('An error occurred during your request: ' + req.status + ' ' + textStatus + ' ' + errThrown);
  });
});
