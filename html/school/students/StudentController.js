angular.module('myAPP')
    .controller('StudentController', function ($scope, $routeParams, $http) {
        $scope.message = 'Student information';
        $scope.params = $routeParams;
        $scope.studentId = $routeParams.sid;

        if($scope.studentId > 0) {
            $http.get("data/students/students.json")
                .then(function(response) {
                    $scope.student = response.data.filter(function (i, n) {
                        return i.id == $scope.studentId;    // XXX switch to ===
                    })
                })
        }
    });
