Kinvey.init({
    appKey: 'kid_PVehjLya5i',
    appSecret: '3aacf8b786aa416aaf2137d44ee5eea4'
});

//promise.then(function(activeUser) {}, function(error) {});

function ChatController($scope) {
    var socket = io.connect();
    $scope.user = {};
    $scope.user.username = '';
    $scope.user.email = '';
    $scope.user.password = '';
    $scope.user.phone = '';


    $scope.sendSignUpInfo = function() {
        Kinvey.User.signup(
        $scope.user, {
            success: function(response) {
                console.log(response);
            }
        });
    }

}