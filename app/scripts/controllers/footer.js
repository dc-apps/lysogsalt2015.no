'use strict';

/**
 * @ngdoc function
 * @name lysogsalt2015noApp.controller:FooterCtrl
 * @description
 * # FooterCtrl
 * Controller of the lysogsalt2015noApp
 */
function FooterCtrl($rootScope, $location){
	var footer = this;

	var colorObject = {};
	colorObject['/'] = 'color2';
	colorObject['/prices'] = 'color3';
	colorObject['/signup'] = 'color4';

	$rootScope.$on('$routeChangeSuccess', function(){
		var index = $location.path();
		footer.color = colorObject[index];
		console.log(index);
	});
}

angular.module('lysogsalt2015noApp')
  .controller('FooterCtrl', FooterCtrl);