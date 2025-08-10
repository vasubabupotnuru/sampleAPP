angular.module('myApp', [])
  .controller('FormController', function($scope) {
    $scope.user = {};
    $scope.show = false;

    // Listen for events from Angular
    $scope.$on('updateFromAngular', function(event, data) {
      $scope.user = data;
    });

    // Send updates to Angular
    $scope.$watch('user', function(newVal) {
      if (newVal) {
        window.postMessage({ type: 'FROM_ANGULARJS', data: newVal }, '*');
      }
    }, true);
  });
