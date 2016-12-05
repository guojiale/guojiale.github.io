/**
 * Created by gjl on 2016/11/21.
 */
var app=angular.module('gjl-app',['ui.router','ngAnimate']);
app.controller('headerCtrl',['$scope','$interval','$state',function ($scope,$interval,$state) {
    var vm=this;
    //init
    vm.indexid=0;
    //点击跳转
    vm.stateGo=function (url) {
        $state.go(url);
        switch(url){
            case 'personal':
                vm.indexid=0
                break;
            case 'h5c3':
                vm.indexid=1
                break;
            case 'h5c3.cube':
                vm.indexid=1
                break;
            case 'phone':
                vm.indexid=2
                break;
        }
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


