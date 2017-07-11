angular.module('landMarkApp').controller('landmarkController', ['$scope', 'imageLookup','placeLookup','$rootScope',function($scope, imageLookup,placeLookup,$rootScope){

	var items = [];
  var resultArray = [];
	$scope.items = items;
  $scope.resultArray = resultArray;
  $scope.page=1;
   

  $scope.searchPanelVisible = false;

  $scope.nextBtnClicked = function(){
    $scope.page = $scope.page+1;
    $scope.items = [];
     $scope.addToList();

  }

  $scope.prevBtnClicked = function(){
    $scope.page = $scope.page-1;
    $scope.items = [];
     $scope.addToList();

  }


	 $scope.addToList = function(){
    if($scope.newItem){
     $scope.items = [];
      var results = imageLookup.getSearchItems($scope.newItem,$scope.page);
    results.then(function(data){
      if(data && data.result.length > 0){
      data.result.map(function(resultData){
       
          $scope.items.push({'title': resultData.title, 'author': resultData.author , 'karma': '..........', 'url': resultData.url});  
    
    });
    $scope.searchPanelVisible = true;
   // $scope.items = $scope.resultArray.slice(0,4);
     angular.forEach($scope.items,function(value,index){
               var rslt = placeLookup.getAuthorKarma(value.author);
 rslt.then(function(userData){
         value['karma'] = userData.name;
          // $scope.$apply();
      })
            })
  
  } else {
      self.newItem = 'sorry. The data could not be found. Try again';
  }   
    });
    }else{
       $scope.items = [];
        $scope.searchPanelVisible = false;
    }
   
  }






  
    // var isValid = filterRequestBeforeAdding();
      
   //  var data = imageLookup.getSearchItems($scope.newItem);
   //  data.then(function(retData){
   //      if(retData.hits.length > 1 && retData.hits[0].webformatURL){
   //        $scope.items.push({'title':$scope.newItem,'path':retData.hits[0].webformatURL,'arrTime':new Date()});
   //          $scope.newItem = '';
   //      }else{

   //        $scope.newItem = 'Landmark could not be found. Please retry!!!';
   //      }
   //  })
   // }

    $scope.numberOfPages=function(){
        return Math.ceil($scope.getData().length/$scope.pageSize);                
    }

    var commands = {
      'show me *val' : function(val){
        $scope.newItem = val;
        $scope.addToList();
        $scope.$apply();
      }
    }

    annyang.addCommands(commands);
    annyang.debug();
    annyang.start();
}]);


