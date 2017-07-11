angular.module('landMarkApp', [])
.directive('chatwidget', function() {
  return {
  	 restrict: 'E',
  	 replace: false,
    templateUrl: 'landmark/views/chat-view.html'
  };
});
	   

