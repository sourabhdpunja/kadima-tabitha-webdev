(function () {
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);

    function UserService($http) {

        var api = {
            "login" : login,
            "logout" : logout,
            "createUser": createUser,
            "findUserById": findUserById,
            "findUserByUsername": findUserByUsername,
            "findUsersByCredentials": findUsersByCredentials,
            "updateUser": updateUser,
            "deleteUser": deleteUser
        };
        return api;

        function login(user) {
            return $http.post("/api/login", user);
        }

        function logout(user) {
            return $http.post("/api/", user);
        }
        function createUser(user) {
            return $http.post("/api/user/", user);
        }

        function findUserById(userId) {
            return $http.get("/api/user/" + userId);
        }

        function findUserByUsername(username) {
            return $http.get("/api/user?username=" + username);
        }

        function findUsersByCredentials(username, password) {
            return $http.get("/api/user?username=" + username + '&password=' + password);

        }

        function updateUser(userId, newUser) {
            return $http.put("/api/user/" + userId, newUser);
        }


        function deleteUser(userId) {
            return $http.delete("/api/user/:userId" + userId);
        }
    }
})(); 