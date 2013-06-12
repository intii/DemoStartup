define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/agenda.tmpl.html'
  ], function($,_,Backbone,agendaTemplate){
    var AgendaView = Backbone.View.extend({

      el: $('.main-content'),

      events: {
        "click .add-btn":     "addContact",
        "click .search-btn":  "filterContacts",
        "click .delete-btn":  "deleteContact"
      },

      initialize: function() {
        this.listenTo(this.model, "change", this.render);
      },

      render: function() {

      },

      addContact: function() {

      },

      filterContacts: function() {

      },

      deleteContact: function() {

      }
    });
    return AgendaView;
  });