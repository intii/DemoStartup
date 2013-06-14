define([
  // 'jquery',


  'backbone'
], function( Backbone){
  var ContactModel = Backbone.Model.extend({

    // Model Constructor
    initialize: function() {

    },

    // Default values for all of the Model attributes
    defaults: {
      lastname: 'Snow',
      firstname:'John',
      phone: '22223',
      address: 'The Wall',
      email: 'jsnow@elsitio.com.ar',
      photo:'http://www.facebooke-mail.com/profile/picture/profile-picture-default.jpg',
      comments: 'no comments'
    },

    // Gets called automatically by Backbone when the set and/or save methods are called (Add your own logic)
    validate: function(attrs) {

    }
  });
  // Returns the contactModel class
  return ContactModel;
});