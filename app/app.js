define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){

  var initialize = function(){
    $('.main-content').html('initialized');
  };

  return {
    initialize: initialize
  };
});