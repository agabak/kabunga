(function(){
'use strict'
 angular.module("MyFirstApp")
  .controller("mainCtrl",mainCtrl);

mainCtrl.$inject = ['$scope'];

  function mainCtrl($scope){
        $scope.name ="";
        $scope.stringValue = "";
        $scope.displayStringValue  = function(){
        if ($scope.name === undefined || $scope.name === "") {
             $scope.stringValue  = "Empty";
        }else{
          var totalStringValue = calculateArrayCount($scope.name);
           if(totalStringValue <=3){
             $scope.stringValue  = "Enjoy!";
           }else {
             $scope.stringValue  = "Too Much!";
           }
        }
    }
        function calculateArrayCount(string){
             var  array = string.split(',')
              return array.length;
        }
  }
})();

 //I   used  bower to download angular and bootstrap
