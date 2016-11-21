/**
 * Created by gjl on 2016/11/21.
 */
var app=angular.module('gjl-app',[]);
function Main() {
    
}
//时间函数
Main.prototype.timer=function (oTime) {
    var _this=this;
    var oTime=document.getElementById(oTime);
    var aTime=oTime.getElementsByClassName('time-n');
    time()
    var timer=setInterval(function(){
        time()
    },1000)
    function time()
    {
        var oDate=new Date();
        var year=oDate.getFullYear();
        var month=oDate.getMonth()+1;
        var date=oDate.getDate();
        var h=oDate.getHours();
        var m=oDate.getMinutes();
        var s=oDate.getSeconds();
        aTime[0].innerHTML=_this.toDou(year);
        aTime[1].innerHTML=_this.toDou(month);
        aTime[2].innerHTML=_this.toDou(date);
        aTime[3].innerHTML=_this.toDou(h);
        aTime[4].innerHTML=_this.toDou(m);
        aTime[5].innerHTML=_this.toDou(s);
    }
};
Main.prototype.toDou=function (n) {
    return n<10?'0'+n:''+n;
}
var init=new Main();
init.timer('time')

