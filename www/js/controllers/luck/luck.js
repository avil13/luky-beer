angular.module('app.controllers.luck', [])

.controller('luckCtrl', ['$scope', '$stateParams', 'API',
    function($scope, $stateParams, API) {
        $scope.option = {
            count: 2,
            price_zone: 0, // 0 - дешево, 1 - средне, 2 - дорого
            alco_zone: 1,  // 0 - без алко, 1 - легкие, 2 - крепкие
            snaks: false
        };

        $scope.list = [];


        $scope.get = function(){
            API.getOrder($scope.option)
            .then(function(res){
                //
            })
        };
    }
]);