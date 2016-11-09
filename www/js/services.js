angular.module('app.services', [])

.factory('API', ['$http', function($http) {
    var url = 'http://localhost:30303';
    
    return {
        getBars: function(){
            return $http.get(url + '/bars')
        }
    };
}])

// .service('BlankService', [function(){

// }]);