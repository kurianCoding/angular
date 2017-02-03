app=angular.module("app",[]);
app.controller("main",function($scope){
}).directive("myDirective",function(){
    return {
	template:'<div>hello \{\{name\}\}</div>',
	controller:function(){}
    };
});
