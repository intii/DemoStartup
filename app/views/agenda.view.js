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
        "keypress .search-input":  "filterContacts",
        "click .delete-btn":  "deleteContact"
      },

      initialize: function() {
        this.contacts = this.options.contacts;
        this.listenTo(this.contacts, "add", this.appendNewContact);
        this.listenTo(this.contacts, "remove", this.addAll);
        this.render();
      },

      render: function() {
        this.$el.html(this.template);
        this.searchInput = $('.search-input');
        this.addAll();
      },

      addAll: function() {
        _.each(this.contacts,this.appendNewContact);
      },

      addContact: function() {
        //get the data from the fields and create new contact
        var newContact = new Contact();
        this.contacts.add(newContact);
      },

      appendNewContact: function(contact) {
        newContactView = new ContactView({model : contact});
        $('.contact-list').append(newContactView.render().el);
      },

      filterContacts: function(key) {
        if (key.keyCode === 13) {
          var valueToSearch = this.searchInput.val(),
              filteredContacts = this.contacts.where({firstname : valueToSearch});
          this.contacts.set(filteredContacts);
        }
      },

      deleteContact: function() {

      }
    });
    return AgendaView;
  });