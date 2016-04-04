var Backbone = require('../lib/backbone-parse/backbone-parse');
var AddNew = require('../../templates/add-new.html');
var HomeView = require("../../templates/home-view.html");
var SingleView = require ("../../templates/single-view.html");
var EditPicture = require('../../templates/edit-picture.html');
var Picture = require('../models/picture');
var Pictures = require("../collections/pictures");
var $ = require('jquery');
require('font-awesome/css/font-awesome.min.css');

var Router = Backbone.Router.extend({
  initialize: function () {
    Backbone.history.start();
  },
  routes: {
    '': 'index',
    'picture/:pictureId': 'picture',
    "add": "add",
    "edit/:pictureId": "edit"
  },
  index: function () {
    Pictures.fetch({
    success: function (pictures){
      var data = { pictures: pictures.toJSON() };
      $("#container").html(HomeView(data));
    }
  })
  }
});

var router = new Router();

router.on('route:picture', function (pictureId){
  var picture = new Picture({
    objectId: pictureId
  });
  picture.fetch({
    success: function (picture){
      $("#container").html(SingleView(picture));
    }
  })
})

router.on("route:add", function(){
  $("#container").html(AddNew);  
})

router.on('route:edit', function (pictureId){
  var picture = new Picture({
    objectId: pictureId
  });
  picture.fetch({
    success: function (picture){
      $("#container").html(EditPicture(picture));
    }
  })
})

module.exports = router;