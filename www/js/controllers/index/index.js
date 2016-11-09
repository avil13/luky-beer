angular.module('app.controllers.index', [])

.controller('indexCtrl', ['$scope', '$stateParams', '$state', '$rootScope', 'API',
    function($scope, $stateParams, $state, $rootScope, API) {
        $scope.Bars = {
            list: [],
            bar: {}
        };

        API.getBars()
            .then(function(res) {

                if (res.data.length) {
                    $scope.Bars.bar = res.data[0];
                }

                $scope.Bars.list = res.data;
            })
            .catch(function(err) {
                console.log(err);
            });

        $scope.goToBar = function() {
            $rootScope.selectedBar = $scope.Bars.bar;
            $state.go('menu.luck');
        };


    }
])