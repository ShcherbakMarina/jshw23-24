requirejs.config({
  paths: {
    'jquery': 'http://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.1.1'
  },
  shim: {
    'jquery': {
      exports: 'jQuery'
    }
  }
});

require(
  [
    'model',
    'view',
    'controller',
    'jquery'
  ],
  function(model, view, controller, $) {
    var firstToDoList = ['learn javascript', 'learn html', 'make coffee'];
    var model = new Model(firstToDoList);
    var view = new View(model);
    var controler = new Controller(model, view);
  }
);




//
// $(function() {
//   var firstToDoList = ['learn javascript', 'learn html', 'make coffee'];
//   var model = new Model(firstToDoList);
//   var view = new View(model);
//   var controler = new Controller(model, view);
// });
