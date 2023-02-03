var app = angular.module("myapp",[]);
app.controller("bai2controller",function($scope){
$scope.students={};
 $scope.calculate = function(){
    var a = parseFloat($scope.students.diem);
    if(a<5){
        $scope.students.hocluc=$scope.students.fullname+" Rớt";
    }else{
        $scope.students.hocluc=$scope.students.fullname+" Đậu";
    }
    
 }
});