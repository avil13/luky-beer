angular.module('app.controllers.luck', [])

.controller('luckCtrl', ['$scope', '$stateParams', 'API',
    function($scope, $stateParams, API) {
        $scope.option = {
            count: 2,
            price_zone: 0,
            alco_zone: 1,
            snaks: false
        };


    }
]);