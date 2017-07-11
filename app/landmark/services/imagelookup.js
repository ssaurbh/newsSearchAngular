var landMark = angular.module('landMarkApp');

landMark.factory('imageLookup', ['$http',function($http) {
   var serviceObj = {};
   var url = 'http://hn.algolia.com/api/v1/search?query='; 
    serviceObj.getSearchItems = function(pattern,page){
    return $http.get(url+pattern + ';' + 'page=' +page).then(function(response){ 
   	var data = response.data;    
   	var result = data.hits;      
   	return {result};
  });
    }

    return serviceObj;

}]);


// angular.module('imageChatApp').factory('imagesService',['$http', function($http) {
// var obj = {};
// var url = 'http://hn.algolia.com/api/v1/search?query=';
// obj.getSearchResults = function(searchStr) {
//  return $http.get(url + searchStr).then(function(response){ 
//    	var data = response.data;    
//    	var result = data.hits;      
//    	return {result};
//  });
// };
// return obj;
// }])
