require.config({
  paths: {
    jquery: '../lib/jquery-2.0.2.min',
    underscore: '../lib/underscore-min',
    backbone: '../lib/backbone-min'
  }
});

require([
  'app'
],
function(App){
  new App.initialize();
});