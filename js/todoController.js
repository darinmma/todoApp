(function() {
  'use strict';
    angular.module('todoApp')
    .controller('TodoController', TodoController);

    function TodoController($scope){
      // var vm = this
      $scope.todo = {thing: '', done: false}
      $scope.add = addTodo


      $scope.all = [
        {thing: 'get a mint from frontlines', done: false},
        {thing: 'eat mint', done: false},
        {thing: 'code', done: false},
        {thing: '...', done: false},
        {thing: 'profit', done: false}
      ];

      function addTodo() {
        $scope.all.push($scope.todo);
        $scope.todo = {thing: '', done: false};
      }
    };
}());
