angular.module('myAPP')
    .controller('StudentController', function ($scope, $routeParams) {
        $scope.message = 'Look! I am an about page.';
        $scope.params = $routeParams;
        $scope.studentId = $routeParams.sid;
    });
