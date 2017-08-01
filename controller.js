angular.module('userProfiles').controller('MainController', function($scope, mainService){
    

    $scope.getUsers = function() {
        $scope.users = mainService.getUsers();
    };
    $scope.getUsers();
    $scope.toggle = mainService.toggleFavorite;

   
})