// app.js
	// create angular app
	var validationApp = angular.module("validationApp", []);

	// create angular controller
	validationApp.controller("mainController", function($scope) {
		//function to submit the form after all validation is completed
		$scope.submitForm = function(isValid){
			//make sure the form is completely valid
			if(isValid){
				alert("this form is awesome!");
			}
		}
	});