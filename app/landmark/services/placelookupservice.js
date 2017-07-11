var landMark = angular.module('landMarkApp');

landMark.factory('placeLookup', ['$http',function($http) {
  var obj = {};
var url = 'http://hn.algolia.com/api/v1/users/';
obj.getAuthorKarma = function(searchStr) {
 return $http.get(url + searchStr).then(function(response){ 
   	var data = response.data.karma;        	   
   	return {name: data};
 });
}
return obj;
}]);
