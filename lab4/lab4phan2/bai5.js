var app = angular.module("myapp",[]);
app.controller("bai5controller",function($scope){
 $scope.calculate = function(){
    if($scope.gender=="Nam"){
         years = new Date().getFullYear();
         b =$scope.ngaysinh;
         c = years-b;
        if(18<=c && c>=27){
            $scope.kiemtra="ông"+$scope.fullname+" đủ điều kiện đi nghĩa vụ quân sự";
        }else{
            $scope.kiemtra="ông"+$scope.fullname+" không đủ điều kiện đi nghĩa vụ quân sự";
        }
    }else if($scope.gender=="Nữ"){
         years = new Date().getFullYear();
         b =$scope.ngaysinh;
         c = years-b;
        if(18<=c && c>=27){
            $scope.kiemtra="Bà"+$scope.fullname+" đủ điều kiện đi nghĩa vụ quân sự";
        }else{
            $scope.kiemtra="Bà"+$scope.fullname+" không đủ điều kiện đi nghĩa vụ quân sự";
        }
    }
    
 }
});