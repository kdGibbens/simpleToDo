//Begin angular application
var app = angular.module('app', []);

//create app controller
app.controller('todoCtrl', function($scope){
	//example text
	$scope.todoList = [{
		todoText: 'Clean room', 
		done: false
	}];
	//push input text
	$scope.todoAdd = function() {
		$scope.todoList.push(
		{
			todoText: $scope.todoInput,
			done: false
		});
		$scope.todoInput = "";
	};

	//Remove list item
	$scope.remove = function() {
		var oldList = $scope.todoList;

		$scope.todoList = [];
		angular.forEach(oldList, function(x) {
			if(!x.done) $scope.todoList.push(x);
		});
	};
	
});