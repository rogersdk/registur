(function () {
    angular
        .module('app.module.home', [
            'app.core'
        ])
        .config(routes);

    function routes($stateProvider) {
        $stateProvider.state(
            homeState()
        );
    }

    //////////////////////

    function homeState() {
        return {
            name: 'home',
            url:'/home',
            templateUrl:'app/modules/home/home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        };
    }
})();