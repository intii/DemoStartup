define([
  'backbone',
  'models/contact.model'
  ], function( Backbone, Contact) {

    var ContactCollection = Backbone.Collection.extend({

      // Tells the Backbone Collection that all of it's models will be of type Model (listed up top as a dependency)
      // model: Contact,

      // url: 'mocks/contacts.json'

    });

    // Returns the Model class
    return ContactCollection;

  }

);