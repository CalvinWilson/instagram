var $ = require('jquery');
var Picture = require('./models/picture');
var LikeCount = 0;

$(document).ready(function(){
  var Router = require('./routes/router');

  $('body').on('click', 'a', function (e){
    e.preventDefault();
    var href = $(this).attr('href').substr(1);
    Router.navigate(href, {trigger:true});
  });

  $("#container").on("click", "#button", function (e){
  	e.preventDefault();
  	var picture = new Picture({
  });

  	picture.set({
    "Title": $("#title").val(),
    "Url": $("#url").val(),
    "Description": $("#desc").val(),
    "Likes": $("#likes").val(),
  });
  picture.save();
  })

  $("#container").on("click", "#editbutton", function (e){
    e.preventDefault();
    var picture = new Picture({
      objectId: ""
    });

    var picture = new Picture(objectId);
    picture.set({
    "objectId": $("#objectId").val(),
    "Title": $("#title").val(),
    "Url": $("#url").val(),
    "Description": $("#desc").val(),
    });
    picture.save();
  });

  $("#container").on("click", ".likebutton", function (e){
    e.preventDefault();
    LikeCount += 1;
    var picture = new Picture({
  });

    picture.set({
    "objectId": $("#objectId").val(),
    "Likes": LikeCount
  });
  picture.save();
  });

});