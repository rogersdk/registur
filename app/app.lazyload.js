(function () {
    angular
        .module('app')
        .config(configuration);

    function configuration($ocLazyLoadProvider) {
        $ocLazyLoadProvider
            .config({
                debug: true,
                events: true,
                modules:[
                    {
                        name:'app.module.home',
                        files:[
                            'app/modules/home/home.module.js'
                        ]
                    }
                ]
            })
    }
})();