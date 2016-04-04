var Backbone = require('../lib/backbone-parse/backbone-parse');
var PictureModel = require('../models/picture');

var PicturesCollection = Backbone.Collection.extend({
  model: PictureModel,
  _parse_class_name: 'picture'
});

var Pictures = new PicturesCollection();

module.exports = Pictures;