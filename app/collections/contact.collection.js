define([
  'jquery',
  'backbone',
  'models/contact.model'
  ], function($, Backbone, Model) {

    var ContactCollection = Backbone.Collection.extend({

      // Tells the Backbone Collection that all of it's models will be of type Model (listed up top as a dependency)
      model: Model

    });

    // Returns the Model class
    return ContactCollection;

  }

);