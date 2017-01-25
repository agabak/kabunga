(function(){
'use strict'
 angular.module("MyFirstApp")
  .controller("mainCtrl",function($scope){
    var vm = this;
    vm.name ="";
    vm.stringValue = 0;

    vm.displayStringValue  = function(){
      var totalStringValue = calculateStringValue(vm.name);
      vm.stringValue = totalStringValue;
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
