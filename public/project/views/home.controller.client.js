(function () {
    angular
        .module("BostonHealth")
        .controller("HomeController", HomeController);


    function HomeController($routeParams) {

        var vm = this;
        console.log("Home Controller");

    }
})();