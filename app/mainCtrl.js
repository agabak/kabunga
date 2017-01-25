(function(){
'use strict'
 angular.module("MyFirstApp")
  .controller("mainCtrl",function($scope){
    $scope.name ="";
    $scope.stringValue = 0;

    $scope.displayStringValue  = function(){
      var totalStringValue = calculateStringValue($scope.name);
      $scope.stringValue = totalStringValue;
    }

    function calculateStringValue(string){
       var stringValue = 0;
      for (var i = 0; i < string.length; i++) {
            stringValue += string.charCodeAt(i);
      }
      return stringValue;
    }
  })
})();
