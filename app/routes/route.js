app.config(function($routeProvider){

    $routeProvider
    .when('/alunos', {
        templateUrl : 'app/views/alunos.html',
        controller  : 'AlunosCtrl',
    })

    .when('/materias', {
        templateUrl : 'app/views/materias.html',
        controller  : 'MateriasCtrl',
    })

    .when('/periodos', {
        templateUrl : 'app/views/periodos.html',
        controller  : 'PeriodosCtrl',
    })

    .when('/boletim', {
        templateUrl : 'app/views/boletim.html',
        controller  : 'BoletimCtrl',
    })

    .when('/nota', {
        templateUrl : 'app/views/notas.html',
        controller  : 'NotaCtrl',
    })

    .when('/notasboletim', {
        templateUrl : 'app/views/notasBoletim.html',
        controller  : 'NotaCtrl',
    })

    .otherwise ({ redirectTo: '/' });
});