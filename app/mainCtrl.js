(function(){
'use strict'
 angular.module("MyFirstApp")
  .controller("mainCtrl",mainCtrl);

mainCtrl.$inject = ['$filter'];

  function mainCtrl($filter){
        var vm = this;
        vm.name ="";
        vm.stringValue = 0;
        vm.displayStringValue  = function(){
              var totalStringValue = calculateStringValue(vm.name);
              vm.stringValue = totalStringValue;
        }
        vm.upper = function(){
          var upperCase = $filter('uppercase');
          vm.name = upperCase(vm.name);
        }
        function calculateStringValue(string){
             var stringValue = 0;
              for (var i = 0; i < string.length; i++) {
                    stringValue += string.charCodeAt(i);
              }
              return stringValue;
        }
  }
})();

  //use vm instead of $scope
