app.controller('NotaCtrl', function($scope, $http){
    
    $scope.listaAlunos = [];
    $scope.aluno = {};
    $scope.listaBoletins = [];
    $scope.boletim = {};
    $scope.listaNotas = [];
    $scope.nota = {};
	$scope.listaPeriodos = [];
    $scope.periodo = {};
	$scope.listaMaterias = [];
	$scope.materia = {};
	$scope.id = "";

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

    $scope.listarBoletins = function(id) {
		$scope.id = id;
		$http({
			method : 'GET',
			url : urlApi + 'boletins/poraluno/' + id
		}).then(function(response) {
			$scope.listaBoletins = response.data;
		}, function(response) {
			console.log('error - listarBoletinsPorAluno')
		});
    };

    $scope.salvaid = function(idBoletim) {
        localStorage.setItem('id', idBoletim);
	}
	
	$scope.copyNota= function(nota) {
        $scope.nota = nota;
	}

	$scope.copyBoletim= function(boletim) {
        $scope.boletim = boletim;
	}
	
	$scope.resetNota = function() {
        $scope.nota = {};
	}

	$scope.resetBoletim = function() {
        $scope.boletim = {};
	}
    
    $scope.listarNotasByBoletim = function() {

		$http({
			method : 'GET',
			url : urlApi + 'notas/porboletim/' + localStorage.getItem('id')
		}).then(function(response) {
			$scope.listaNotas = response.data;
		}, function(response) {
			console.log('error - listarNotasPorBoletim')
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

	$scope.salvarBoletimByUrl = function(idAluno, idPeriodo) {
		$http({
			method : 'POST',
			url : urlApi + 'boletins/' + idAluno + '/' + idPeriodo,
			
		}).then(function(response) {
			$scope.listaPeriodos.push(response.data);
			$scope.listarPeriodos();
		}, function(response) {
			console.log('error - salvarBoletimByUrl');
		});
	};

	$scope.deleteNota = function(id) {

		$http({
			method : 'DELETE',
			url : urlApi + 'notas/' + id
		}).then(function(response) {
			$scope.listaNotas.push(response.data);
			$scope.listarNotasByBoletim();
			$scope.nota = {};
		}, function(response) {
			console.log('error - deletePeriodo');
		});
	};

	$scope.deleteBoletim = function(id) {

		$http({
			method : 'DELETE',
			url : urlApi + 'boletins/' + id
		}).then(function(response) {

			$scope.listarBoletins($scope.id);
			$scope.boletim = {};
		}, function(response) {
			console.log('error - deleteBoletim');
		});
	};

	$scope.atualizarNota = function() {
		$http({
			method : 'PUT',
			url : urlApi + 'notas/' + $scope.nota.id,
			data : $scope.nota
		}).then(function(response) {
			$scope.listarNotasByBoletim();
			$scope.nota = {};
		}, function(response) {
			console.log('error - atualizarNotas');
		});
	};

	$scope.salvarNota = function() {
		
		$scope.nota.boletim = localStorage.getItem('id');
		$http({
			method : 'POST',
			url : urlApi + 'notas/',
			data : $scope.nota
		}).then(function(response) {
			$scope.listarNotasByBoletim();
			$scope.nota = {};
		}, function(response) {
			console.log('error - salvarNota');
		});
	};
});