var app = angular.module("myapp",[]);
app.controller("bai1controller",function($scope){
 $scope.calculate = function(){
    
    $scope.perimeter= $scope.length*$scope.width
    $scope.acreaga=($scope.length*$scope.width)*2
 }
});