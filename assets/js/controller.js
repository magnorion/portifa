var app = angular.module("app",[]);
app.controller("app-controller",function($scope){

  // Boxs
  $scope.boxes = [
    { img:"assets/img/no-img.png",comment:"Projeto 1" },
    { img:"assets/img/no-img.png",comment:"Projeto 2" },
    { img:"assets/img/no-img.png",comment:"Projeto 3" },
    { img:"assets/img/no-img.png",comment:"Projeto 4" },
    { img:"assets/img/no-img.png",comment:"Projeto 5" },
    { img:"assets/img/no-img.png",comment:"Projeto 6" }
  ];
  // endBoxs
});
