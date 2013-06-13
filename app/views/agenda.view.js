define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/agenda.tmpl.html',
  'models/contact.model',
  'views/contact.view'
  ], function($,_,Backbone,agendaTemplate,Contact,ContactView){
    var AgendaView = Backbone.View.extend({

      el: $('.main-content'),

      template: _.template(agendaTemplate),

      events: {
        "click .add-btn":     "addContact",
        "click .search-btn":  "filterContacts",
        "click .delete-btn":  "deleteContact"
      },

      initialize: function() {
        this.listenTo(this.options.contacts, "add", this.appendNewContact);
        this.render();
      },

      render: function() {
        this.$el.html(this.template);
      },

      addContact: function() {
        //get the data from the fields and create new contact
        var newContact = new Contact();
        this.options.contacts.add(newContact);
      },

      appendNewContact: function(contact) {
        newContactView = new ContactView({model : contact});
        $('.contact-list').append(newContactView.render().el);
      },

      filterContacts: function() {

      },

      deleteContact: function() {

      }
    });
    return AgendaView;
  });