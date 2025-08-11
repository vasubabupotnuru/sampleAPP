angular.module('myApp', [])
.controller('FormController', function($scope) {
  $scope.user = {};
  $scope.show = false;

  $scope.$on('updateFromAngular', function(event, data) {
    $scope.user = data;
    $scope.show = true;
  });
});
