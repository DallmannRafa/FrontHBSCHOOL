app.controller('MateriasCtrl', function($scope, $http){

    $scope.listaMaterias = [];
    $scope.materia = {};

    var urlApi = 'http://localhost:8080/';

    $scope.listarMaterias = function() {
		$http({
			method : 'GET',
			url : urlApi + 'materias/'
		}).then(function(response) {
			$scope.listaMaterias = response.data;
		}, function(response) {
			console.log('error - listarMaterias')
		});
	};

	$scope.deleteMateria = function(id) {

		$http({
			method : 'DELETE',
			url : urlApi + 'materias/' + id
		}).then(function(response) {
			$scope.listaMaterias.push(response.data);
			$scope.listarMaterias();
			$scope.materia = {};
		}, function(response) {
			console.log('error - deleteMateria ');
		});
	};

	$scope.copyMateria = function(materia) {
		$scope.materia = angular.copy(materia);
	}

	$scope.resetMateria = function() {
		$scope.materia = {};
	}

	$scope.atualizarMateria = function() {
		$http({
			method : 'PUT',
			url : urlApi + 'materias/' + $scope.materia.id,
			data : $scope.materia
		}).then(function(response) {
			$scope.listaMaterias.push(response.data);
			$scope.listarMaterias();
			$scope.materia = {};
		}, function(response) {
			console.log('error - atualizarMaterias');
		});
	};

	$scope.salvarMateria = function() {
		$http({
			method : 'POST',
			url : urlApi + 'materias/',
			data : $scope.materia
		}).then(function(response) {
			$scope.listaMaterias.push(response.data);
			$scope.listarMaterias();
			$scope.materia = {};
		}, function(response) {
			console.log('error - salvarMaterias');
		});
	}
});