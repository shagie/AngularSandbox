angular.module('myAPP')
    .controller('TeacherController', function ($scope, $routeParams, $http) {
        $scope.message = 'Teacher information';
        $scope.params = $routeParams;

        $scope.submit = function() {
            if ($scope.text) {
                $http.get("data/teachers/" + $scope.text + ".json")
                    .then(function (response) {
                            $scope.teacher = response.data;
                        }
                    )
            }
        };
    });
