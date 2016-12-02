/**
 * Created by gjl on 2016/11/21.
 */
var app=angular.module('gjl-app',['ui.router']);
app.controller('headerCtrl',['$scope','$interval','$state',function ($scope,$interval,$state) {
    var vm=this;
    vm.stateGo=function (url) {
        $state.go(url);
    };
    vm.timer=new Date();
    $interval(function () {
        vm.timer=new Date();
    },1000);
}]);
function Main(json) {

}
//video
Main.prototype.video=function () {

};
var initData={

}
var init=new Main(initData);


