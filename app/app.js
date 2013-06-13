define([
  'jquery',
  'underscore',
  'backbone',
  'collections/contact.collection',
  'views/agenda.view'
], function($,_,Backbone,ContactCollection,AgendaView){
  var initialize = function(){
    var contacts = new ContactCollection(),
        agenda = new AgendaView({contacts : contacts});
  };

  return {
    initialize: initialize
  };
});