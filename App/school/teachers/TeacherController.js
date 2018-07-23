angular.module('myAPP')
    .controller('TeacherController', function ($scope, $routeParams, $http, JSONFormatterConfig) {
        $scope.message = 'Teacher information';
        $scope.params = $routeParams;
        JSONFormatterConfig.hoverPreviewEnabled = true;
        JSONFormatterConfig.hoverPreviewArrayCount = 10;
        JSONFormatterConfig.hoverPreviewFieldCount = 5;

        $scope.submit = function() {
            if ($scope.text) {
                $http.get("/couch/teachers/" + $scope.text)
                    .then(function (response) {
                            $scope.teacher = response.data;
                        }
                    )
            }
        };
    });
