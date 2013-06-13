define([
  // 'jquery',

  'backbone'
], function( Backbone){
  var contactModel = Backbone.Model.extend({

    // Model Constructor
    initialize: function() {

    },

    // Default values for all of the Model attributes
    defaults: {
      lastname: null,
      firstname:null,
      phone: null,
      address: null,
      email: null,
      photo:'http://www.facebooke-mail.com/profile/picture/profile-picture-default.jpg',
      comments: null
    },

    // Gets called automatically by Backbone when the set and/or save methods are called (Add your own logic)
    validate: function(attrs) {

    }
  });
  // Returns the contactModel class
  return contactModel;
});