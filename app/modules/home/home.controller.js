(function () {
    angular
        .module('app.module.home')
        .controller('HomeController', HomeController);

    function HomeController() {
        var vm = this;
        console.log('This is the home controller');

        vm.title = 'This is a title var with vm pattern';
    }
})();