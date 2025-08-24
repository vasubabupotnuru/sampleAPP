angular.module('myApp', [])
.controller('TodoController', function($scope) {
  $scope.todos = [];
  $scope.editingTodo = null;
  
  $scope.todoForm = {
    name: '',
    description: '',
    priority: 'medium'
  };
  
  $scope.addTodo = function() {
    if ($scope.todoForm.name) {
      var newTodo = {
        id: Date.now(),
        name: $scope.todoForm.name,
        description: $scope.todoForm.description,
        priority: $scope.todoForm.priority,
        completed: false,
        createdAt: new Date().toISOString()
      };
      $scope.todos.push(newTodo);
    
      console.log('Added new todo:', newTodo);
      console.log('Current todos:', $scope.todos);
      
      $scope.todoForm = {
        name: '',
        description: '',
        priority: 'medium'
      };
    }
  };

  $scope.deleteTodo = function(id) {
    var index = $scope.todos.findIndex(function(todo) {
      return todo.id === id;
    });
    
    if (index !== -1) {
      $scope.todos.splice(index, 1);
    }
  };
  
  $scope.editTodo = function(todo) {
    $scope.editingTodo = angular.copy(todo);
  };
  
  $scope.updateTodo = function() {
    if ($scope.editingTodo) {
      var index = $scope.todos.findIndex(function(todo) {
        return todo.id === $scope.editingTodo.id;
      });
      
      if (index !== -1) {
        $scope.todos[index] = $scope.editingTodo;
        $scope.editingTodo = null;
      }
    }
  };
  
  $scope.cancelEdit = function() {
    $scope.editingTodo = null;
  };
  
  $scope.toggleComplete = function(todo) {
    todo.completed = !todo.completed;
  };
  
  $scope.$on('updateFromAngular', function(event, data) {
    $scope.todoForm = data;
  });
});
