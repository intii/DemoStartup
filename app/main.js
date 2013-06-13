require.config({
  paths: {
    jquery: '../lib/jquery-2.0.2.min',
    underscore: '../lib/underscore-min',
    backbone: '../lib/backbone-min'
  },
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'underscore' : {
      exports : '_'
		}
	}

});

require([
  'app'
],
function(App){
  App.initialize();
});