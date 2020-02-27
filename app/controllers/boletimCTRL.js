app.controller('BoletimCtrl', function($scope, $http){
    
    $scope.listaAlunos = [];
    $scope.aluno = {};
    $scope.boletim = [];
	$scope.linhaBoletim = {};
	$scope.listaPeriodos = [];
    $scope.periodo = {};

    var urlApi = 'http://localhost:8080/';

    $scope.listarAlunos = function() {
		$http({
			method : 'GET',
			url : urlApi + 'alunos/'
		}).then(function(response) {
			$scope.listaAlunos = response.data;
		}, function(response) {
			console.log('error - listarAlunos')
		});
	};
	
	
    
    $scope.listarPeriodos = function() {
		$http({
			method : 'GET',
			url : urlApi + 'periodos/'
		}).then(function(response) {
			$scope.listaPeriodos = response.data;
		}, function(response) {
			console.log('error - listarMaterias')
		});
    };
    
    $scope.geraBoletim = function(idAluno, idPeriodo) {
		$http({
			method : 'GET',
			url : urlApi + 'boletins/report/' + 'html/' + idPeriodo + '/' + idAluno
		}).then(function(response) {
			response.data;
		}, function(response) {
			console.log('error - geraBoletim')
		});
    };
});