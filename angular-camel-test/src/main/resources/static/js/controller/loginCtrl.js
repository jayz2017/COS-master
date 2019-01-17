app.controller("loginCtrl",function ($rootScope,$scope,$http) {
    $rootScope.isLandingPage = false;
    $scope.isLoggedin = false;
    $scope.isOneblank = true;

        
    $scope.userLogin = function(){
        var param = { username: $scope.username, password: $scope.password};
        if("" !== $scope.username && "" !== $scope.password) {
            $scope.isOneblank = true;
            $http.post("/camel/api/login", param).then(function (response) {
                if("success" == response.data.data) {
                    $scope.isLoggedin = false;
                    window.sessionStorage.setItem("username",$scope.username);
                    window.location.href="#!/overview";
                } else {
                    $scope.isLoggedin = true;
                }
            }).catch(function(){
                $scope.isLoggedin = true;
            });

        }else {
            $scope.isOneblank = false;
        }
    } 
       
})