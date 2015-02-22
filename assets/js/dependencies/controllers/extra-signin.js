App.controller('ExtraSigninController', function ($scope, $routeParams){
	
    $("body>.default-page").replaceWith($('#signin-page'));

    $('input[type="checkbox"]').iCheck({
        checkboxClass: 'icheckbox_minimal-grey',
        increaseArea: '20%' // optional
    });
    
});