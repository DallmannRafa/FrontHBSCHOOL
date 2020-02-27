app.controller('PeriodosCtrl', function($scope, $http){

    $scope.listaPeriodos = [];
    $scope.periodo = {};

    var urlApi = 'http://localhost:8080/';

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
	$scope.deletePeriodo = function(id) {

		$http({
			method : 'DELETE',
			url : urlApi + 'periodos/' + id
		}).then(function(response) {
			$scope.listaPeriodos.push(response.data);
			$scope.listarPeriodos();
			$scope.periodo = {};
		}, function(response) {
			console.log('error - deletePeriodo');
		});
	};

	$scope.copyPeriodo = function(periodo) {
		$scope.periodo = angular.copy(periodo);
	}

	$scope.resetPeriodo = function() {
		$scope.periodo = {};
	}

	$scope.atualizarPeriodo = function() {
		$http({
			method : 'PUT',
			url : urlApi + 'periodos/' + $scope.periodo.id,
			data : $scope.periodo
		}).then(function(response) {
			$scope.listaPeriodos.push(response.data);
			$scope.listarPeriodos();
			$scope.periodo = {};
		}, function(response) {
			console.log('error - atualizarPeriodos');
		});
	};

	$scope.salvarPeriodo = function() {
		$http({
			method : 'POST',
			url : urlApi + 'periodos/',
			data : $scope.periodo
		}).then(function(response) {
			$scope.listaPeriodos.push(response.data);
			$scope.listarPeriodos();
			$scope.periodo = {};
		}, function(response) {
			console.log('error - salvarPeriodo');
		});
	};
});