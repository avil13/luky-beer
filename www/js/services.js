angular.module('app.services', [])

.factory('API', ['$http', function($http) {
    var url = 'http://localhost:30303';

    return {
        /**
         * получение списка баров
         */
        getBars: function() {
            return $http.get(url + '/bars')
        },

        /**
         * получение заказа
         * 
         * @params object params объект с параметрами запроса 
         */
        getOrder: function(params) {
            var options = {
                params: params
            };

            return $http.get(url + '/order', options)
        }
    };
}])

/**
 * проставляет нужный класс в случае верности условия
 * 
 * @example
 * <button is-active="value==ture" cl="btn-info">Go</button>
 */
.directive('isActive', [function() {
    return {
        restrict: 'A',
        scope: {
            isActive: '='
        },

        link: function(scope, el, attrs) {

            scope.$watch('isActive', (function(nw, ow) {
                // if (nw === ow) return;

                var className = this.attr('cl') || 'active';

                if(!!nw){
                    this.addClass(className);
                }else{
                    this.removeClass(className); 
                }

            }).bind(el));
        }
    };
}])

// .service('BlankService', [function(){

// }]);