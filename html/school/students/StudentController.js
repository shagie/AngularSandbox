angular.module('myAPP')
    .controller('StudentController', function ($scope, $routeParams, $http) {
        $scope.message = 'Look! I am an about page.';
        $scope.params = $routeParams;
        $scope.studentId = $routeParams.sid;

        if($scope.studentId > 0) {
            $http.get("data/students.json")
                .then(function(response) {
                    $scope.student = response.data[0].filter(function (i, n) {
                        return i.id == $scope.studentId;    // XXX switch to ===
                    })
                })
        }
    });
