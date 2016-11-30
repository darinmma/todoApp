(function() {
  'use strict';
    angular.module('todoApp')
    .controller('TodoController', TodoController)

    function TodoController(){
      var vm = this
      vm.todo = ''
    }
}());
