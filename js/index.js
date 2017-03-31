window.onlond=function(){

    $('#fen').click(function(){
        $('.tan').show();
        $('.tan-btn-right').click(function(){
            tag();
            $('.tan').hide();
        });
        $('.tan-btn-left').click(function(){
            $('.tan').hide();
        });
    });
    $('#btns').click(function(){
        $('.tan').show();
        tag();
        $('.tan-btn-right').click(function(){
            tag();
            $('.tan').hide();
        });
        $('.tan-btn-left').click(function(){
            $('.tan').hide();
        });
    });
    $('#joins').click(function(){
        $('.tan').show();
        tag();
        $('.tan-btn-right').click(function(){
            tag();
            $('.tan').hide();
        });
        $('.tan-btn-left').click(function(){
            $('.tan').hide();
        });
    });
    function tag(){

        document.getElementsByTagName("tan-con")[0].value = window.location.href;
        var Url2=  document.getElementsByTagName("tan-con")[0];
        Url2.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令


    }
    
    $('#join').click(function () {
        var u = navigator.userAgent;
        if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1){//安卓手机
            location.href="http://getapp.mygmz.com/my/qiooke.apk";
        } else if (u.indexOf('iPhone') > -1) {//苹果手机
            location.href="https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=1129602652&mt=8";
        }
    });
    
    
};
