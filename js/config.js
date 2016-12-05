/**
 * Created by gjl on 2016/11/26.
 */
/*/--------------------------angular run------------------------------/*/
app.run(function ($rootScope,$state) {
    $rootScope.$on('$stateChangeStart',function (event,toState,toParams,fromState,fromParams) {
    });
    $rootScope.$on('$stateChangeSuccess',function (event,toState,toParams,fromState,fromParams) {
        console.log(1111);
    });
});
/*/--------------------------controller------------------------------/*/
app.controller('cube',function ($scope) {
    $scope.cubeNavId=0
});
/*/--------------------------router------------------------------/*/
app.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state('personal',{
        url:'/personal',
        templateUrl:'template/personal.html',
        resolve:{},
        data:{
            hello:'111'
        },
        onEnter:function () {
            
        },
        onExit:function () {
            
        }
    }).state('h5c3',{
        url:'/h5c3',
        templateUrl:'template/h5c3.html',
        controller:'cube'
    }).state('h5c3.cube',{
        url:'/cube',
        templateUrl:'template/h5c3/cube-mousemove.html',
    }).state('h5c3.cube1',{
        url:'/cube1',
        templateUrl:'template/h5c3/cube-mouseenter.html',
    }).state('h5c3.cube2',{
        url:'/cube2',
        templateUrl:'template/h5c3/g-circle.html',
    }).state('h5c3.cube3',{
        url:'/cube2',
        templateUrl:'template/h5c3/fanzhuan.html',
    }).state('phone',{
        url:'/phone',
        templateUrl:'template/h5c3.html'
    });
    $urlRouterProvider.otherwise('personal');
});
/*/--------------------------service------------------------------/*/
/*app.provider('doubleNumber',function () {
 this.time=0;
 this.$get=function () {
 return {

 }
 }
 });*/
app.constant('baseService',{
    "doubleNumber":function (num) {
        return num<10 ?'0'+num : num;
    }
});
/*/--------------------------directive------------------------------/*/
app.directive('myVideo',function (baseService) {
    return{
        restrict:'A',
        templateUrl:'template/g-video.html',
        link:function (scope,ele,attrs) {
            var oVideo=ele.find('#g-v1')[0];
            var oPlayBtn=ele.find('#play');
            var oPauseBtn=ele.find('#pause');
            var oStopBtn=ele.find('#stop');
            var oCurrentTime=ele.find('#curTime');
            var fnPlay=function(){
                oVideo.play();
                oPlayBtn.css({display:"none"});
                oPauseBtn.css({display:"block"});
            };
            /*var fnPause=function(){
                oVideo.pause();
                oPlayBtn.css({display:"block"})
                oPauseBtn.css({display:"none"})
            };
            oPlayBtn.on('click',function () {
                fnPlay();
            });
            oPauseBtn.on('click',function () {
                fnPause()
            });
            oStopBtn.on('click',function () {
                oVideo.pause();
                oVideo.currentTime=0;
            });*/
            // 播放进度
            var oSpeed=ele.find('.g-speed');
            var oSpeedThis=ele.find('.g-speed_this');
            var oButton=oSpeedThis.find('.button');
            /*;(function () {
                oVideo.ontimeupdate=function(){
                    var scale=oVideo.currentTime/oVideo.duration;
                    oSpeedThis[0].style.width=scale*100+'%';
                    oCurrentTime[0].innerHTML=baseService.doubleNumber(parseInt(oVideo.currentTime/60))+':'+baseService.doubleNumber(parseInt(oVideo.currentTime%60));
                    //存储
                    //localStorage.setItem('play_time',oVideo.currentTime);
                };
            })();*/
            //调整进度
           /* ;(function () {
                oButton.on('mousedown',function (ev) {
                    var disX=ev.clientX-oButton.offset().left;
                    document.onmousemove=function(ev){
                        var l=ev.clientX - disX - oSpeed.offset().left;
                        var scale=l/oSpeed.width();
                        console.log(oSpeed.width());
                        scale<=0 && (scale=0);
                        scale>=1 && (scale=1);
                        oSpeedThis[0].style.width=scale*100+'%';
                        oVideo.currentTime=oVideo.duration*scale;
                    };
                    document.onmouseup=function(){
                        document.onmousemove=null;
                        document.onmouseup=null;
                        fnPlay();
                    };
                    return false;
                });
            })();*/

           /* //点击调整进度
            ;(function () {
                oSpeed.on('click',function (ev) {
                    var l=ev.clientX-oSpeed.offset().left;
                    var scale=l/oSpeed.width();
                    oVideo.currentTime=oVideo.duration*scale;
                    fnPlay();
                });
            })();*/
            //缓冲进度
            /*;(function () {
                var oSpeedBuffer=document.querySelector('.g-speed_buffer');
                var oTotalTime=ele.find('#totalTime');
                oVideo.onprogress=function(){
                    var scale=oVideo.buffered.end(0)/oVideo.duration;
                    oSpeedBuffer.style.width=scale*100+'%';
                    //总时间
                    oTotalTime.html(baseService.doubleNumber(parseInt(oVideo.duration/60))+':'+baseService.doubleNumber(parseInt(oVideo.duration%60)));
                };
            })();*/
            //调节音量
            /*;(function () {
                var oImg=ele.find('.fa-volume-up');
                var flag=true;
                oImg.on('click',function () {
                    if(flag){
                        oVideo.muted=true;
                        oImg.removeClass('fa fa-volume-up');
                        oImg.addClass('glyphicon glyphicon-volume-off');
                    }else{
                        oImg.addClass('fa fa-volume-up');
                        oImg.removeClass('glyphicon glyphicon-volume-off');
                        oVideo.muted=false;
                    }
                    flag=!flag;
                });
                var oVolumeThis=ele.find('.g-volume_this');
                var oVolume=ele.find('.g-volume');
                var oBtn=ele.find('.g-volume-button');
                oBtn.on('mousedown',function (ev) {
                    var disX=ev.clientX-oBtn.offset().left;
                    document.onmousemove=function(ev){
                        var l=ev.clientX-disX -oVolume.offset().left;
                        var scale=l/oVolume.width();
                        scale<=0 && (scale=0);
                        scale>=1 && (scale=1);
                        oVolumeThis[0].style.width=scale*100+'%';
                        oVideo.volume=scale;
                    };
                    document.onmouseup=function(){
                        document.onmousemove=null;
                        document.onmouseup=null;
                    };
                    return false;
                });
            })();*/

        },
        scope:{}
    }
});
