define([
  'jquery',
  'underscore',
  'backbone',
  'models/contact.model',
  'text!templates/contact.tmpl.html'
], function($, _, Backbone, ContactModel, ContactTemplate){

  var ContactView = Backbone.View.extend({

    initialize: function() {
      // Calls the view's render method
      this.render();
    },

    // Renders the view's template to the UI
    render: function() {
      this.template = _.template(ContactTemplate, this.model.attributes);

      // this.$el.html(this.template);
      // Maintains chainability
      this.el = this.template;
      return this;
    }
  });
  return ContactView;
});