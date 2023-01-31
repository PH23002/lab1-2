var app = angular.module("myapp",[]);
app.controller("bai1controller",function($scope){
  $scope.fullname = "Nguyễn văn Tèo";
  $scope.ngaysinh ="20-01-1995";
  $scope.gioitinh ="nam";
  $scope.photo ="anh.jpg";
  $scope.diem=8.5;
});
// app.controller("bai2controller",function($scope){
//     $scope.studenn = {
//     "ten":"Nguyễn văn Tèo",
//     "ngaysinh" :"20-01-1995",
//     "gioitinh" :"nam",
//     "photo" :"anh.jpg",
//     "diem":8.5
//   };
// });
app.controller("bai2controller",function($scope){
  $scope.students = {
    fullname : "Nguyễn văn Tèo",
    ngaysinh :"20-01-1995",
    gioitinh :"nam",
    photo :"anh.jpg",
    diem:8.5
  }
})
app.controller("bai3controller",function($scope){
    $scope.studen=[{
        "hinh":"anh.jpg",
        "ten":"Phạm Thế Anh",
        "ngaysinh":"01-12-2003",
        "gioitinh":"Nam",
        "diem":8.5
    },
    {
        "hinh":"anh.jpg",
        "ten":"Vuong Van Phuoc",
        "ngaysinh":"01-12-2003",
        "gioitinh":"Nam",
        "diem":8.5
    },{
        "hinh":"anh.jpg",
        "ten":"Son Dau Vang",
        "ngaysinh":"01-12-2003",
        "gioitinh":"Nam",
        "diem":8.5
    }]
   
  });