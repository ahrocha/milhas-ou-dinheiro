var app = angular.module('comparadorApp', []);

app.controller('smilesCtrl', function($scope,$http) {

  $scope.precoMilhas = 35;

  $scope.pontos = 20;
  $scope.pontosA = 1;
  $scope.pontosB = 5;
  $scope.pontosC = 19;

  $scope.preco = 668;
  $scope.precoA = 602;
  $scope.precoB = 373;
  $scope.precoC = 48;

});


app.controller('multiplusCtrl', function($scope,$http) {

  $scope.precoMilhas = 28;

  $scope.pontos = 19;
  $scope.pontosA = 6.3;
  $scope.pontosB = 3.8;
  $scope.pontosC = 2.09;

  $scope.preco = 789;
  $scope.precoA = 599;
  $scope.precoB = 642;
  $scope.precoC = 710;

});
