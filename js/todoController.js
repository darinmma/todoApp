(function() {
  'use strict';
    angular.module('todoApp')
    .controller('TodoController', TodoController);

    function TodoController(){
      var vm = this
      vm.todo = {thing: '', done: false}
      vm.add = addTodo


      vm.all = [
        {thing: 'get a mint from frontlines', done: false},
        {thing: 'eat mint', done: false},
        {thing: 'code', done: false},
        {thing: '...', done: false},
        {thing: 'profit', done: false}
      ];

      function addTodo() {
        vm.all.push(vm.todo);
        vm.todo = {thing: '', done: false};
      }
    };
}());
