app.controller('AlunosCtrl', function($scope, $http){

    $scope.listaAlunos = [];
    $scope.aluno = {};

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

	$scope.deleteAluno = function(id) {

		$http({
			method : 'DELETE',
			url : urlApi + 'alunos/' + id
		}).then(function(response) {
			$scope.listaAlunos.push(response.data);
			$scope.listarAlunos();
			$scope.aluno = {};
		}, function(response) {
			console.log('error - deleteAluno ');
		});
	};

	$scope.copyAluno = function(aluno) {
		$scope.aluno = angular.copy(aluno);
	}

	$scope.resetAluno = function() {
		$scope.aluno = {};
	}

	$scope.atualizarAluno = function() {
		$http({
			method : 'PUT',
			url : urlApi + 'alunos/' + $scope.aluno.id,
			data : $scope.aluno
		}).then(function(response) {
			$scope.listaAlunos.push(response.data);
			$scope.listarAlunos();
			$scope.aluno = {};
		}, function(response) {
			console.log('error - atualizarAlunos');
		});
	};

	$scope.salvarAluno = function() {
		$http({
			method : 'POST',
			url : urlApi + 'alunos/',
			data : $scope.aluno
		}).then(function(response) {
			$scope.listaAlunos.push(response.data);
			$scope.listarAlunos();
			$scope.aluno = {};
		}, function(response) {
			console.log('error - salvarAlunos');
		});
	}
});